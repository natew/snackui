import path from 'path'

import browserslist from 'browserslist'
import { lazyPostCSS } from 'next/dist/build/webpack/config/blocks/css'
import { getGlobalCssLoader } from 'next/dist/build/webpack/config/blocks/css/loaders'
import type { PluginOptions as LoaderPluginOptions } from 'tamagui-loader'
import { TamaguiPlugin } from 'tamagui-loader'
import webpack from 'webpack'
import { loadTamaguiBuildConfigSync } from '@tamagui/static'

export type WithTamaguiProps = LoaderPluginOptions & {
  appDir?: boolean
  enableLegacyFontSupport?: boolean
  includeCSSTest?: RegExp | ((path: string) => boolean)
  shouldExtract?: (path: string, projectRoot: string) => boolean | undefined
  shouldExcludeFromServer?: (props: {
    context: string
    request: string
    fullPath: string
  }) => boolean | string | undefined
}

export const withTamagui = (tamaguiOptionsIn?: WithTamaguiProps) => {
  return (nextConfig: any = {}) => {
    const tamaguiOptions = {
      ...tamaguiOptionsIn,
      ...loadTamaguiBuildConfigSync(tamaguiOptionsIn),
    }
    const isAppDir = tamaguiOptions?.appDir || nextConfig.experimental?.appDir

    return {
      ...nextConfig,
      transpilePackages: [
        ...(nextConfig.transpilePackages || []),
        'expo-linear-gradient',
      ],
      webpack: (webpackConfig: any, options: any) => {
        const { dir, config, dev, isServer } = options

        // @ts-ignore
        if (typeof globalThis['__DEV__'] === 'undefined') {
          // @ts-ignore
          globalThis['__DEV__'] = dev
        }

        const isNext12 = typeof options.config?.swcMinify === 'boolean'
        if (!isNext12) {
          throw new Error(`Next.js 12 only supported`)
        }

        const prefix = `${isServer ? ' ssr ' : ' web '} |`
        const SEP = path.sep

        if (process.env.ANALYZE === 'true') {
          Object.assign(webpackConfig.optimization, {
            concatenateModules: false,
          })
        }

        const tamaguiPlugin = new TamaguiPlugin({
          isServer,
          ...tamaguiOptions,
        })

        const defines = {
          'process.env.IS_STATIC': JSON.stringify(''),
          'process.env.TAMAGUI_TARGET': '"web"',
          'process.env.TAMAGUI_IS_SERVER': JSON.stringify(isServer ? 'true' : ''),
          __DEV__: JSON.stringify(dev),
          ...((tamaguiOptions.outputCSS || process.env.TAMAGUI_DOES_SSR_CSS) && {
            'process.env.TAMAGUI_DOES_SSR_CSS': JSON.stringify(
              process.env.TAMAGUI_DOES_SSR_CSS ?? !isServer
            ),
          }),

          // TODO move to TamaguiPlugin
          // optimizes inserts automatically assuming CSS wont be "removed" on page change
          ...(tamaguiOptions.emitSingleCSSFile && {
            'process.env.TAMAGUI_INSERT_SELECTOR_TRIES': JSON.stringify('1'),
          }),
        }

        webpackConfig.plugins.push(new webpack.DefinePlugin(defines))

        if (process.env.IGNORE_TS_CONFIG_PATHS) {
          if (process.env.DEBUG) {
            console.info(prefix, 'ignoring tsconfig paths')
          }
          if (webpackConfig.resolve.plugins[0]) {
            delete webpackConfig.resolve.plugins[0].paths['@tamagui/*']
            delete webpackConfig.resolve.plugins[0].paths['tamagui']
          }
        }

        // better shaking for icons:
        if (!isServer) {
          nextConfig.modularizeImports ??= {}
          nextConfig.modularizeImports['@tamagui/lucide-icons'] = {
            transform: `@tamagui/lucide-icons/dist/esm/icons/{{kebabCase member}}`,
            skipDefaultConversion: true,
          }
        }

        /**
         * Server react-native compat
         */
        if (isServer) {
          const externalize = (context: string, request: string) => {
            const fullPath = request[0] === '.' ? path.join(context, request) : request

            if (tamaguiOptions.shouldExcludeFromServer) {
              const userRes = tamaguiOptions.shouldExcludeFromServer({
                context,
                request,
                fullPath,
              })
              if (userRes !== undefined) {
                return userRes
              }
            }

            if (tamaguiPlugin.isInComponentModule(fullPath)) {
              return false
            }

            if (fullPath.includes('react-native-web')) {
              // always inline react-native-web due to errors where next.js resolved the path to esm
              return false
            }

            // must inline react-native so we can alias to react-native-web
            if (
              fullPath === 'react-native' ||
              fullPath.startsWith(`react-native${SEP}`)
            ) {
              return false
            }

            if (
              // feather icons uses react-native-svg which needs to be aliased
              // fullPath.includes('/lucide-icons/') ||
              fullPath.startsWith('react-native-web') ||
              fullPath.includes(`node_modules${SEP}react-native-web`) ||
              new RegExp(`^(react-dom|react)${SEP}$`).test(fullPath)
            ) {
              return `commonjs ${fullPath}`
            }
            if (
              fullPath.startsWith('moti') ||
              fullPath.startsWith('solito') ||
              fullPath === 'tamagui' ||
              fullPath.startsWith('@tamagui') ||
              fullPath === 'react-native-safe-area-context' ||
              fullPath === 'expo-linear-gradient' ||
              fullPath.startsWith('@react-navigation') ||
              fullPath.startsWith('@gorhom')
            ) {
              return
            }
            if (/^@?react-native-/.test(request)) {
              return false
            }
            return true
          }

          // externalize react native things from bundle
          webpackConfig.externals = [
            ...webpackConfig.externals.map((external) => {
              if (typeof external !== 'function') {
                return external
              }
              // only runs on server
              return (ctx, cb) => {
                const isCb = typeof cb === 'function'
                const res = externalize(ctx.context, ctx.request)
                if (isCb) {
                  if (typeof res === 'string') {
                    return cb(null, res)
                  }
                  if (res) {
                    return external(ctx, cb)
                  }
                  return cb()
                }
                return !res
                  ? Promise.resolve(undefined)
                  : typeof res === 'string'
                    ? Promise.resolve(res)
                    : external(ctx)
              }
            }),
          ]
        }

        /**
         * Non-server support
         */
        const cssRules = webpackConfig.module.rules.find(
          (rule) =>
            Array.isArray(rule.oneOf) &&
            rule.oneOf.some(
              ({ test }) =>
                typeof test === 'object' &&
                typeof test.test === 'function' &&
                test.test('filename.css')
            )
        ).oneOf

        /**
         * Font Support
         */
        if (cssRules) {
          if (tamaguiOptions.enableLegacyFontSupport) {
            // fonts support
            cssRules.unshift({
              test: /\.(woff(2)?|eot|ttf|otf)(\?v=\d+\.\d+\.\d+)?$/,
              use: [
                {
                  loader: require.resolve('url-loader'),
                  options: {
                    limit: nextConfig.inlineFontLimit || 1024,
                    fallback: require.resolve('file-loader'),
                    publicPath: `${
                      nextConfig.assetPrefix || ''
                    }/_next/static/chunks/fonts/`,
                    outputPath: `${isServer ? '../' : ''}static/chunks/fonts/`,
                    name: '[name].[ext]',
                  },
                },
              ],
            })
          }

          /**
           * CSS Support
           */
          const cssLoader = getGlobalCssLoader(
            // @ts-ignore
            {
              assetPrefix:
                nextConfig.assetPrefix ||
                options.config.assetPrefix ||
                config.assetPrefix,
              future: nextConfig.future,
              experimental: nextConfig.experimental || {},
              isEdgeRuntime: true,
              isProduction: !dev,
              targetWeb: true,
              isClient: !isServer,
              isServer,
              isDevelopment: dev,
            },
            // @ts-ignore
            () => lazyPostCSS(dir, getSupportedBrowsers(dir, dev)),
            []
          )
          if (!isAppDir) {
            cssRules.unshift({
              test: tamaguiOptions.includeCSSTest ?? /\.tamagui\.css$/,
              sideEffects: true,
              use: cssLoader,
            })
          }
        }

        webpackConfig.plugins.push(tamaguiPlugin)

        if (typeof nextConfig.webpack === 'function') {
          return nextConfig.webpack(webpackConfig, options)
        }

        return webpackConfig
      },
    }
  }
}

function getSupportedBrowsers(dir, isDevelopment) {
  let browsers
  try {
    browsers = browserslist.loadConfig({
      path: dir,
      env: isDevelopment ? 'development' : 'production',
    })
  } catch {
    //
  }
  return browsers
}
