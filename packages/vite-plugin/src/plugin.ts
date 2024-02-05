import type { TamaguiOptions } from '@tamagui/static'
import { watchTamaguiConfig } from '@tamagui/static'
import type { Plugin } from 'vite'
import { transformWithEsbuild } from 'vite'

/**
 * For some reason envPlugin doesnt work for vitest, but process: { env: {} } breaks vitest
 */

export function tamaguiPlugin({
  platform = 'web',
  ...options
}: Partial<TamaguiOptions> & {
  /**
   * @deprecated Deprecated, just leave it off
   */
  useReactNativeWebLite?: boolean
  disableWatchTamaguiConfig?: boolean
}): Plugin {
  const watcher = options.disableWatchTamaguiConfig
    ? null
    : watchTamaguiConfig({
        platform,
        components: ['tamagui'],
        config: './src/tamagui.config.ts',
        ...options,
      })

  const components = [
    ...new Set([...(options.components || []), 'tamagui', '@tamagui/core']),
  ]
  const noExternalSSR = new RegExp(
    `${components.join('|')}|react-native|expo-linear-gradient`,
    'ig'
  )

  const extensions = [
    `.${platform}.mjs`,
    `.${platform}.js`,
    `.${platform}.jsx`,
    `.${platform}.ts`,
    `.${platform}.tsx`,
    '.mjs',
    '.js',
    '.mts',
    '.ts',
    '.jsx',
    '.tsx',
    '.json',
  ]

  const plugin: Plugin = {
    name: 'tamagui-base',
    enforce: 'pre',

    async buildEnd() {
      await watcher?.then((res) => {
        res?.dispose()
      })
    },

    // fix expo-linear-gradient
    async transform(code, id) {
      if (!id.includes('expo-linear-gradient')) {
        return
      }
      // Use the exposed transform from vite, instead of directly
      // transforming with esbuild
      return transformWithEsbuild(code, id, {
        loader: 'jsx',
        jsx: 'automatic', // 👈 this is important
      })
    },

    config(userConfig, env) {
      return {
        define: {
          // reanimated support
          _frameTimestamp: undefined,
          _WORKLET: false,
          __DEV__: `${env.mode === 'development' ? true : false}`,
          'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || env.mode),
          'process.env.ENABLE_RSC': JSON.stringify(process.env.ENABLE_RSC || ''),
          'process.env.ENABLE_STEPS': JSON.stringify(process.env.ENABLE_STEPS || ''),
          'process.env.IS_STATIC': JSON.stringify(false),
        },
        ssr: {
          noExternal: noExternalSSR,
        },
        resolve: {
          extensions: extensions,
          alias: {
            ...(platform !== 'native' && {
              'react-native/Libraries/Renderer/shims/ReactFabric': '@tamagui/proxy-worm',
              'react-native/Libraries/Utilities/codegenNativeComponent':
                '@tamagui/proxy-worm',
              'react-native-svg': '@tamagui/react-native-svg',
              'react-native': 'react-native-web',
              ...(options.useReactNativeWebLite && {
                'react-native': 'react-native-web-lite',
                'react-native-web': 'react-native-web-lite',
              }),
            }),
          },
        },
      }
    },
  }

  return plugin
}
