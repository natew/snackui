import { relative, sep } from 'path'

import { requireTamaguiCore } from './helpers/requireTamaguiCore'
import { TamaguiPlatform } from './types'

const nameToPaths = {}
const Module = require('module')

export const getNameToPaths = () => nameToPaths

const proxyWorm = require('@tamagui/proxy-worm')
// TODO can swap with react-native-web-lite
const rnw = require('react-native-web')

let isRegistered = false
let og: any

export function registerRequire(platform: TamaguiPlatform) {
  // already registered
  if (isRegistered) {
    return {
      tamaguiRequire: require,
      unregister: () => {},
    }
  }

  const { unregister } = require('esbuild-register/dist/node').register({
    hookIgnoreNodeModules: false,
  })

  og = Module.prototype.require // capture esbuild require
  isRegistered = true

  Module.prototype.require = tamaguiRequire

  function tamaguiRequire(this: any, path: string) {
    if (/\.(gif|jpe?g|png|svg|ttf|otf|woff2?|bmp|webp)$/i.test(path)) {
      return {}
    }
    if (
      path === '@gorhom/bottom-sheet' ||
      path.startsWith('react-native-reanimated') ||
      path === 'expo-linear-gradient' ||
      path === '@expo/vector-icons'
    ) {
      return proxyWorm
    }
    if (path === 'react-native/package.json') {
      return packageJson
    }
    if (
      path === 'react-native-web-lite' ||
      (path.startsWith('react-native') &&
        // allow our rnw.tsx imports through
        !path.startsWith('react-native-web/dist/cjs/exports'.replace(/\//g, sep)))
    ) {
      return rnw
    }
    if (path === '@tamagui/core' || path === '@tamagui/web') {
      return requireTamaguiCore(platform, (path) => {
        return og.apply(this, [path])
      })
    }

    if (path in knownIgnorableModules) {
      return proxyWorm
    }

    try {
      const out = og.apply(this, arguments)
      // only for studio disable for now
      // if (!nameToPaths[path]) {
      //   if (out && typeof out === 'object') {
      //     for (const key in out) {
      //       try {
      //         const conf = out[key]?.staticConfig as StaticConfig
      //         if (conf) {
      //           if (conf.componentName) {
      //             nameToPaths[conf.componentName] ??= new Set()
      //             const fullName = path.startsWith('.')
      //               ? join(`${this.path.replace(/dist(\/cjs)?/, 'src')}`, path)
      //               : path
      //             nameToPaths[conf.componentName].add(fullName)
      //           } else {
      //             // console.log('no name component', path)
      //           }
      //         }
      //       } catch {
      //         // ok
      //       }
      //     }
      //   }
      // }
      return out
    } catch (err: any) {
      if (allowedIgnores[path] || IGNORES === 'true') {
        // ignore
      } else if (!process.env.TAMAGUI_SHOW_FULL_BUNDLE_ERRORS) {
        if (hasWarnedForModules.has(path)) {
          // ignore
        } else {
          hasWarnedForModules.add(path)
          // rome-ignore lint/suspicious/noConsoleLog: <explanation>
          console.log(
            `\n⚠️ Tamagui Warning [001]: Skipping loading ${path} due to error bundling.\n   - message: ${err.message}\n   - for more info see: https://tamagui.dev/docs/intro/errors#warning-001\n   - set TAMAGUI_SHOW_FULL_BUNDLE_ERRORS=1 to see stack trace\n\n`
          )
        }
      } else {
        /**
         * Allow errors to happen, we're just reading config and components but sometimes external modules cause problems
         * We can't fix every problem, so just swap them out with proxyWorm which is a sort of generic object that can be read.
         */

        console.error(
          `Tamagui failed loading the pre-built tamagui.config.ts
  
  ${err.message}
  ${err.stack}
  
  You can see if it loads in the node repl:
  
  require("./${relative(process.cwd(), path)}").default
  
  `
        )
      }

      return proxyWorm
    }
  }

  return {
    tamaguiRequire,
    unregister: () => {
      unregister()
      isRegistered = false
      Module.prototype.require = og
    },
  }
}

const packageJson = require('react-native-web/package.json')
const IGNORES = process.env.TAMAGUI_IGNORE_BUNDLE_ERRORS
const extraIgnores =
  IGNORES === 'true' ? [] : process.env.TAMAGUI_IGNORE_BUNDLE_ERRORS?.split(',')
const knownIgnorableModules = {
  'expo-modules': true,
  solito: true,
  ...Object.fromEntries(extraIgnores?.map((k) => [k, true]) || []),
}

const hasWarnedForModules = new Set<string>()

const allowedIgnores = {
  'expo-constants': true,
}
