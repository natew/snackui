import { readFile } from 'fs/promises'

import * as babel from '@babel/core'
import { build } from 'esbuild'
import { writeFile } from 'fs-extra'

const outPath = 'react-native.js'

run()

async function nativeBabelFlowTransform(input: string) {
  return await new Promise<string>((res, rej) => {
    babel.transform(
      input,
      {
        presets: ['module:metro-react-native-babel-preset'],
      },
      (err: any, { code }) => {
        if (err) rej(err)
        res(code)
      }
    )
  })
}

async function run() {
  // rome-ignore lint/suspicious/noConsoleLog: <explanation>
  console.log(`Prebuilding React Native (one time cost...)`)

  const reactOutPath = './react.js'
  const reactJsxOutPath = './react-jsx-runtime.js'

  await Promise.all([
    build({
      bundle: true,
      entryPoints: [require.resolve('react')],
      outfile: reactOutPath,
      format: 'cjs',
      target: 'node20',
      jsx: 'transform',
      jsxFactory: 'react',
      allowOverwrite: true,
      platform: 'node',
      define: {
        __DEV__: 'true',
        'process.env.NODE_ENV': `"development"`,
      },
      logLevel: 'warning',
      external: ['react', 'react/jsx-runtime', 'react/jsx-dev-runtime'],
    }).then(async () => {
      // manual force exports
      const bundled = await readFile(reactOutPath, 'utf-8')
      const outCode = `
      const run = () => {  
        ${bundled.replace(
          `module.exports = require_react_development();`,
          `return require_react_development();`
        )}
      }
      const __mod__ = run()
      ${RExports.map((n) => `export const ${n} = __mod__.${n}`).join('\n')}
      export default __mod__
      `
      await writeFile(reactOutPath, outCode)
    }),
    build({
      bundle: true,
      entryPoints: [require.resolve('react/jsx-runtime')],
      outfile: reactJsxOutPath,
      format: 'cjs',
      target: 'node20',
      jsx: 'transform',
      jsxFactory: 'react',
      allowOverwrite: true,
      platform: 'node',
      define: {
        __DEV__: 'true',
        'process.env.NODE_ENV': `"development"`,
      },
      logLevel: 'warning',
    }).then(async () => {
      // manual force exports
      const bundled = await readFile(reactJsxOutPath, 'utf-8')
      const outCode = `
      const run = () => {  
        ${bundled.replace(
          `module.exports = require_react_jsx_runtime_development();`,
          `return require_react_jsx_runtime_development();`
        )}
      }
      const __mod__ = run()
      ${['jsx', 'jsxs', 'jsxDEV', 'Fragment']
        .map((n) => `export const ${n} = __mod__.${n}`)
        .join('\n')}
      `
      await writeFile(reactJsxOutPath, outCode)
    }),
    build({
      bundle: true,
      entryPoints: [require.resolve('react-native')],
      outfile: outPath,
      format: 'cjs',
      target: 'node20',
      jsx: 'transform',
      jsxFactory: 'react',
      allowOverwrite: true,
      platform: 'node',

      loader: {
        '.png': 'dataurl',
        '.jpg': 'dataurl',
        '.jpeg': 'dataurl',
        '.gif': 'dataurl',
      },
      define: {
        __DEV__: 'true',
        'process.env.NODE_ENV': `"development"`,
      },
      logLevel: 'warning',
      external: ['react', 'react/jsx-runtime', 'react/jsx-dev-runtime'],
      resolveExtensions: [
        '.ios.js',
        '.native.js',
        '.native.ts',
        '.native.tsx',
        '.js',
        '.jsx',
        '.json',
        '.ts',
        '.tsx',
        '.mjs',
      ],
      plugins: [
        {
          name: 'remove-flow',
          setup(build) {
            build.onResolve(
              {
                filter: /HMRClient/,
              },
              async (input) => {
                return {
                  path: require.resolve('@tamagui/vite-native-hmr'),
                }
              }
            )

            build.onLoad(
              {
                filter: /.*.js/,
              },
              async (input) => {
                if (
                  !input.path.includes('react-native') &&
                  !input.path.includes(`vite-native-hmr`)
                ) {
                  return
                }

                const code = await readFile(input.path, 'utf-8')

                // omg so ugly but no class support?
                const outagain = await nativeBabelFlowTransform(code)

                return {
                  contents: outagain,
                  loader: 'jsx',
                }
              }
            )
          },
        },
      ],
    }).then(async () => {
      // manual force exports
      const bundled = await readFile(outPath, 'utf-8')
      const outCode = `
      const run = () => {  
        ${bundled.replace(
          `module.exports = require_react_native();`,
          `return require_react_native();`
        )}
      }
      const RN = run()
      ${RNExportNames.map((n) => `export const ${n} = RN.${n}`).join('\n')}
      `
      await writeFile(outPath, outCode)
    }),
  ])

  // now make our modifications:
}

const RNExportNames = [
  'AccessibilityInfo',
  'ActivityIndicator',
  'Button',
  'DrawerLayoutAndroid',
  'FlatList',
  'Image',
  'ImageBackground',
  'InputAccessoryView',
  'KeyboardAvoidingView',
  'Modal',
  'Pressable',
  'RefreshControl',
  'SafeAreaView',
  'ScrollView',
  'SectionList',
  'StatusBar',
  'Switch',
  'Text',
  'TextInput',
  'Touchable',
  'TouchableHighlight',
  'TouchableNativeFeedback',
  'TouchableOpacity',
  'TouchableWithoutFeedback',
  'View',
  'VirtualizedList',
  'VirtualizedSectionList',
  'ActionSheetIOS',
  'Alert',
  'Animated',
  'Appearance',
  'AppRegistry',
  'AppState',
  'BackHandler',
  'DeviceInfo',
  'DevSettings',
  'Dimensions',
  'Easing',
  'findNodeHandle',
  'I18nManager',
  'InteractionManager',
  'Keyboard',
  'LayoutAnimation',
  'Linking',
  'LogBox',
  'NativeDialogManagerAndroid',
  'NativeEventEmitter',
  'Networking',
  'PanResponder',
  'PermissionsAndroid',
  'PixelRatio',
  // 'PushNotificationIOS',
  'Settings',
  'Share',
  'StyleSheet',
  'Systrace',
  'ToastAndroid',
  'TurboModuleRegistry',
  'UIManager',
  'unstable_batchedUpdates',
  'useColorScheme',
  'useWindowDimensions',
  'UTFSequence',
  'Vibration',
  'YellowBox',
  'DeviceEventEmitter',
  'DynamicColorIOS',
  'NativeAppEventEmitter',
  'NativeModules',
  'Platform',
  'PlatformColor',
  'processColor',
  'requireNativeComponent',
  'RootTagContext',
  // 'unstable_enableLogBox',
  // 'ColorPropType',
  // 'EdgeInsetsPropType',
  // 'PointPropType',
  // 'ViewPropTypes',
]

const RExports = [
  'Children',
  'Component',
  'Fragment',
  'Profiler',
  'PureComponent',
  'StrictMode',
  'Suspense',
  '__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED',
  'cloneElement',
  'createContext',
  'createElement',
  'createFactory',
  'createRef',
  'forwardRef',
  'isValidElement',
  'lazy',
  'memo',
  'startTransition',
  'unstable_act',
  'useCallback',
  'useContext',
  'useDebugValue',
  'useDeferredValue',
  'useEffect',
  'useId',
  'useImperativeHandle',
  'useInsertionEffect',
  'useLayoutEffect',
  'useMemo',
  'useReducer',
  'useRef',
  'useState',
  'useSyncExternalStore',
  'useTransition',
  'version',
]
