import { esbuildCommonjs } from '@originjs/vite-plugin-commonjs'
import type { TamaguiOptions } from '@tamagui/static'
import { watchTamaguiConfig } from '@tamagui/static'
import type { Plugin } from 'vite'

/**
 * For some reason envPlugin doesnt work for vitest, but process: { env: {} } breaks vitest
 */

export function tamaguiPlugin(
  options: Partial<TamaguiOptions> & {
    useReactNativeWebLite?: boolean
    disableWatchTamaguiConfig?: boolean
  }
): Plugin {
  const watcher = options.disableWatchTamaguiConfig
    ? null
    : watchTamaguiConfig({
        platform: 'web',
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

  const plugin: Plugin = {
    name: 'tamagui-base',
    enforce: 'pre',

    async buildEnd() {
      await watcher?.then((res) => {
        res?.dispose()
      })
    },

    config(userConfig, env) {
      return {
        plugins: [
          //
          // envPlugin(['NODE_ENV', 'TAMAGUI_TARGET', 'ENABLE_RSC']),
          // viteCommonjs(),
        ],
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
        // build: {
        //   commonjsOptions: {
        //     transformMixedEsModules: true,
        //   },
        // },
        ssr: {
          noExternal: noExternalSSR,
        },
        optimizeDeps: {
          // disabled: false,
          include: options.platform !== 'native' ? ['styleq'] : [],
          esbuildOptions: {
            jsx: 'transform',
            // plugins: [
            //   esbuildCommonjs([
            //     'styleq',
            //     'inline-style-prefixer',
            //     'create-react-class',
            //     'copy-to-clipboard',
            //     'escape-string-regexp',
            //   ]),
            // ],
            resolveExtensions: [
              '.web.js',
              '.web.jsx',
              '.web.ts',
              '.web.tsx',
              '.js',
              '.jsx',
              '.json',
              '.ts',
              '.tsx',
              '.mjs',
            ],
            loader: {
              '.js': 'jsx',
            },
          },
        },
        resolve: {
          // for once it extracts
          // mainFields: ['module:jsx', 'module', 'jsnext:main', 'jsnext', 'main'],
          extensions: [
            '.web.js',
            '.web.jsx',
            '.web.ts',
            '.web.tsx',
            '.js',
            '.jsx',
            '.json',
            '.ts',
            '.tsx',
            '.mjs',
          ],
          alias: {
            ...(options.platform !== 'native' && {
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
