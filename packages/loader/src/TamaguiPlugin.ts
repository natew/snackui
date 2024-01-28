import { existsSync } from 'fs'
import path, { dirname, join } from 'path'

import type { TamaguiOptions } from '@tamagui/static'
import { loadTamagui, minifyCSS, watchTamaguiConfig } from '@tamagui/static'
import buildResolver from 'esm-resolve'
import type { Compiler, RuleSetRule } from 'webpack'
import webpack from 'webpack'

import { shouldExclude } from './shouldExclude'

export type PluginOptions = TamaguiOptions & {
  isServer?: boolean
  enableStudio?: boolean
  exclude?: RuleSetRule['exclude']
  test?: RuleSetRule['test']
  jsLoader?: any
  disableEsbuildLoader?: boolean
  disableModuleJSXEntry?: boolean
  disableWatchConfig?: boolean
  disableAliases?: boolean
  /**
   * @deprecated Deprecated
   */
  useReactNativeWebLite?: boolean
}

const dir = process.cwd()
const resolver = buildResolver(join(dir, 'index.js'), {
  constraints: 'node',
})

export class TamaguiPlugin {
  pluginName = 'TamaguiPlugin'

  constructor(
    public options: PluginOptions = {
      platform: 'web',
      components: ['@tamagui/core'],
    }
  ) {}

  resolveEsm = (relativePath: string, onlyRequire = false) => {
    if (this.options.isServer || onlyRequire) {
      return require.resolve(relativePath)
    }
    const esm = resolver(relativePath)
    return esm ? path.join(dir, esm) : require.resolve(relativePath)
  }

  safeResolves = (resolves: [string, string][], multiple = false) => {
    const res: string[][] = []
    for (const [out, mod] of resolves) {
      if (out.endsWith('$')) {
        res.push([out, mod])
        continue
      }
      try {
        res.push([out, this.resolveEsm(mod)])
        if (multiple) {
          res.push([out, this.resolveEsm(mod, true)])
        }
      } catch (err) {
        if (out.includes(`@gorhom/bottom-sheet`)) {
          continue
        }
        if (process.env.DEBUG?.startsWith('tamagui')) {
          console.info(`  withTamagui skipping resolving ${out}`, err)
        }
      }
    }
    return res
  }

  get componentsFullPaths() {
    return this.safeResolves(
      this.options.components.map(
        (moduleName) => [moduleName, moduleName] as [string, string]
      ),
      true
    )
  }

  get componentsBaseDirs() {
    return this.componentsFullPaths.map(([_, fullPath]) => {
      let rootPath = dirname(fullPath as string)
      while (rootPath.length > 1) {
        const pkg = join(rootPath, 'package.json')
        const hasPkg = existsSync(pkg)
        if (hasPkg) {
          return rootPath
        }
        rootPath = join(rootPath, '..')
      }
      throw new Error(`Couldn't find package.json in any path above: ${fullPath}`)
    })
  }

  isInComponentModule = (fullPath: string) => {
    return this.componentsBaseDirs.some((componentDir) =>
      fullPath.startsWith(componentDir)
    )
  }

  get defaultAliases() {
    return Object.fromEntries(
      this.safeResolves([
        ['@tamagui/core/reset.css', '@tamagui/core/reset.css'],
        ['@tamagui/core', '@tamagui/core'],
        ['@tamagui/web', '@tamagui/web'],
        // web specific light react-native-svg, optional, can use svgs but had issues with compat
        ['react-native-svg', '@tamagui/react-native-svg'],
        // fixes https://github.com/kentcdodds/mdx-bundler/issues/143
        ['react/jsx-runtime.js', 'react/jsx-runtime'],
        ['react/jsx-runtime', 'react/jsx-runtime'],
        ['react/jsx-dev-runtime.js', 'react/jsx-dev-runtime'],
        ['react/jsx-dev-runtime', 'react/jsx-dev-runtime'],
        ['react-native-reanimated', 'react-native-reanimated'],

        ['@testing-library/react-native', '@tamagui/proxy-worm'],
        ['@gorhom/bottom-sheet$', '@gorhom/bottom-sheet'],
        // fix reanimated 3
        ['react-native/Libraries/Renderer/shims/ReactFabric', '@tamagui/proxy-worm'],
        // @ts-expect-error deprecated
        ...(this.options.useReactNativeWebLite
          ? [
              ['react-native$', 'react-native-web-lite'],
              ['react-native-web$', 'react-native-web-lite'],
            ]
          : [
              ['react-native$', 'react-native-web'],
              ['react-native-web$', 'react-native-web'],
            ]),
      ])
    )
  }

  apply(compiler: Compiler) {
    if (compiler.watchMode && !this.options.disableWatchConfig) {
      void watchTamaguiConfig(this.options).then((watcher) => {
        // yes this is weirdly done promise...
        process.once('exit', () => {
          watcher.dispose()
        })
      })
    }

    if (!this.options.exclude) {
      // default to running if in component module, otherwise falling back the jsx dir heuristics
      this.options.exclude = (path) => {
        if (this.isInComponentModule(path)) {
          return false
        }
        return shouldExclude(path)
      }
    }

    compiler.hooks.beforeRun.tapPromise(this.pluginName, async () => {
      await loadTamagui(this.options)
    })

    // mark as side effect
    compiler.hooks.normalModuleFactory.tap(this.pluginName, (nmf) => {
      nmf.hooks.createModule.tap(
        this.pluginName,
        // @ts-expect-error CreateData is typed as 'object'...
        (createData: {
          matchResource?: string
          settings: { sideEffects?: boolean }
        }) => {
          if (createData.matchResource?.endsWith('.tamagui.css')) {
            createData.settings.sideEffects = true
          }
        }
      )
    })

    // default exclude definition
    if (!this.options.disableAliases) {
      const existingAlias = compiler.options.resolve.alias
      if (Array.isArray(existingAlias)) {
        //
      } else if (typeof existingAlias === 'object') {
        Object.assign(existingAlias, this.defaultAliases)
      }
    }

    // explude react native web exports:
    const excludeExports = this.options.excludeReactNativeWebExports
    if (excludeExports) {
      if (Array.isArray(excludeExports)) {
        try {
          const regexStr = `react-native-web(-lite)?/.*(${excludeExports.join('|')}).*js`
          const regex = new RegExp(regexStr)

          compiler.hooks.environment.tap('MyPlugin', () => {
            // Here you create a new instance of the plugin you want to add
            const definePlugin = new webpack.NormalModuleReplacementPlugin(
              regex,
              this.resolveEsm('@tamagui/proxy-worm')
            )
            // Manually apply the plugin to the compiler
            definePlugin.apply(compiler)
          })
        } catch (err) {
          console.warn(
            `Invalid names provided to excludeReactNativeWebExports: ${excludeExports.join(
              ', '
            )}`
          )
        }
      }
    }

    if (this.options.emitSingleCSSFile) {
      console.info(`    ➡ [tamagui] 🎨 combining css into one file`)

      compiler.hooks.make.tap(this.pluginName, (compilation) => {
        compilation.hooks.processAssets.tap(this.pluginName, (assets) => {
          try {
            const cssFiles = Object.keys(assets).filter((asset) => asset.endsWith('.css'))
            if (cssFiles.length === 0) {
              return
            }

            const combinedCSS = cssFiles.reduce((acc, file) => {
              const cssContent = compilation.assets[file].source()
              return `${acc}\n${cssContent}`
            }, '')

            for (const [index, cssFile] of cssFiles.entries()) {
              if (index > 0) {
                compilation.updateAsset(
                  cssFile,
                  new compiler.webpack.sources.RawSource(``)
                )
              } else {
                console.info(`    ➡ [tamagui] 🎨 emitting single css to ${cssFile}`)
                // just replace the first one? hacky
                compilation.updateAsset(
                  cssFile,
                  new compiler.webpack.sources.RawSource(Buffer.from(combinedCSS))
                )
              }
            }
          } catch (error: any) {
            compilation.errors.push(error)
          }
        })
      })
    }

    compiler.options.resolve.extensions = [
      ...new Set([
        '.web.tsx',
        '.web.ts',
        '.web.js',
        '.ts',
        '.tsx',
        '.js',
        ...(compiler.options.resolve.extensions || []),
      ]),
    ]

    // look for compiled js with jsx intact as specified by module:jsx
    const mainFields = compiler.options.resolve.mainFields
    if (mainFields) {
      compiler.options.resolve.mainFields = Array.isArray(mainFields)
        ? mainFields
        : [mainFields]
      if (!this.options.disableModuleJSXEntry) mainFields.unshift('module:jsx')
    }

    if (!compiler.options.module) {
      return
    }

    const { jsLoader } = this.options

    const existing = compiler.options.module.rules as any[]

    const rules =
      (existing.find((x) => (typeof x === 'object' && 'oneOf' in x ? x : null))
        ?.oneOf as any[]) ?? existing

    const nextJsRules = rules.findIndex(
      (x) => x?.use && x.use.loader === 'next-swc-loader' && x.issuerLayer !== 'api'
    )

    const esbuildLoader = {
      loader: require.resolve('esbuild-loader'),
      options: {
        target: 'es2021',
        keepNames: true,
        loader: 'tsx',
        tsconfigRaw: {
          module: this.options.isServer ? 'commonjs' : 'esnext',
          isolatedModules: true,
          resolveJsonModule: true,
        },
      },
    }

    if (!this.options.disable) {
      const tamaguiLoader = {
        loader: require.resolve('tamagui-loader'),
        options: {
          ...this.options,
          _disableLoadTamagui: true,
        },
      }

      if (nextJsRules === -1) {
        existing.push({
          // looks like its in jsx dir (could be better but windows path sep)
          test: /jsx.*\.m?[jt]sx?$/,
          exclude: this.options.exclude,
          resolve: {
            fullySpecified: false,
          },
          use: [esbuildLoader],
        })

        // app dir or not next.js
        existing.push({
          test: this.options.test ?? /\.m?[jt]sx?$/,
          exclude: this.options.exclude,
          resolve: {
            fullySpecified: false,
          },
          use: [tamaguiLoader],
        })
      } else if (!this.options.disableEsbuildLoader) {
        const startIndex = nextJsRules ? nextJsRules + 1 : 0
        const existingLoader = nextJsRules ? rules[startIndex] : undefined

        rules.splice(startIndex, 0, {
          test: this.options.test ?? /\.m?[jt]sx?$/,
          exclude: this.options.exclude,
          resolve: {
            fullySpecified: false,
          },
          use: [
            ...(jsLoader ? [jsLoader] : []),
            ...(existingLoader && nextJsRules ? [].concat(existingLoader.use) : []),
            ...(!(jsLoader || existingLoader) ? [esbuildLoader] : []),
            tamaguiLoader,
          ],
        })
      }
    }
  }
}
