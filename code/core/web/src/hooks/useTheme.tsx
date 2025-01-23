import { isClient, isIos, isServer, isWeb } from '@tamagui/constants'
import {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type MutableRefObject,
} from 'react'
import { getConfig, getSetting } from '../config'
import type { Variable } from '../createVariable'
import { getVariable } from '../createVariable'
import type { ThemeManagerState } from '../helpers/ThemeManager'
import { ThemeManager, getHasThemeUpdatingProps } from '../helpers/ThemeManager'
import { ThemeManagerContext } from '../helpers/ThemeManagerContext'
import { isEqualShallow } from '../helpers/createShallowSetState'
import type {
  ThemeParsed,
  ThemeProps,
  Tokens,
  UseThemeWithStateProps,
  VariableVal,
  VariableValGeneric,
} from '../types'
import { shouldDeoptDueToParentScheme } from './shouldDeoptDueToParentScheme'

export type ChangedThemeResponse = {
  state?: ThemeManagerState
  prevState?: ThemeManagerState
  themeManager?: ThemeManager | null
  isNewTheme: boolean
  // null = never been inversed
  // false = was inversed, now not
  inversed?: null | boolean
  mounted?: boolean
}

const emptyProps = { name: null }

export type ThemeGettable<Val> = Val & {
  /**
   * Tries to return an optimized value that avoids the need for re-rendering:
   * On web a CSS variable, on iOS a dynamic color, on Android it doesn't
   * optimize and returns the underyling value.
   *
   * See: https://reactnative.dev/docs/dynamiccolorios
   *
   * @param platform when "web" it will only return the dynamic value for web, avoiding the iOS dynamic value.
   * For things like SVG, gradients, or other external components that don't support it, use this option.
   */
  get: (
    platform?: 'web'
  ) =>
    | string
    | (Val extends Variable<infer X>
        ? X extends VariableValGeneric
          ? any
          : Exclude<X, Variable>
        : Val extends VariableVal
          ? string | number
          : unknown)
}

export type UseThemeResult = {
  [Key in keyof ThemeParsed | keyof Tokens['color']]: ThemeGettable<
    Key extends keyof ThemeParsed ? ThemeParsed[Key] : Variable<any>
  >
} & {
  // fallback to other tokens
  [Key in string & {}]?: ThemeGettable<Variable<any>>
}

export const useTheme = (props: ThemeProps = emptyProps) => {
  const [_, theme] = useThemeWithState(props)
  const res = theme
  return res as UseThemeResult
}

export const useThemeWithState = (
  props: UseThemeWithStateProps
): [ChangedThemeResponse, ThemeParsed] => {
  const keys = useRef<string[] | null>(null)
  const changedThemeState = useChangeThemeEffect(props, false, keys)

  // @ts-expect-error
  if (process.env.NODE_ENV === 'development' && globalThis.time) time`theme-change-effect`

  const { themeManager, state } = changedThemeState

  if (process.env.NODE_ENV === 'development') {
    if (!state?.theme) {
      if (process.env.TAMAGUI_DISABLE_NO_THEME_WARNING !== '1') {
        console.error(
          `[tamagui] No theme found, this could be due to an invalid theme name (given theme props ${JSON.stringify(
            props
          )}).\n\nIf this is intended and you are using Tamagui without any themes, you can disable this warning by setting the environment variable TAMAGUI_DISABLE_NO_THEME_WARNING=1`
        )
      }
    }
  }

  const themeProxied = getThemeProxied(props, state, keys, themeManager)

  if (process.env.NODE_ENV === 'development' && props.debug === 'verbose') {
    console.groupCollapsed(`  🔹 [${themeManager?.id}] useTheme =>`, state?.name)
    console.info(
      'returning state',
      changedThemeState.state,
      changedThemeState.isNewTheme,
      'from props',
      props
    )
    console.groupEnd()
  }

  return [changedThemeState, themeProxied]
}

const emptyObject = {}

// only proxy each theme one time, after that we know that renders are sync,
// so we can just change the focus of the proxied theme and it can be re-used
const ProxiedThemes: Map<ThemeParsed, UseThemeResult> = new Map()

let curKeys: MutableRefObject<string[] | null>
let curProps: UseThemeWithStateProps
let curThemeManger: ThemeManager

function getThemeProxied(
  // underscore to prevent accidental usage below
  _props: UseThemeWithStateProps,
  state: ThemeManagerState | undefined,
  _keys: MutableRefObject<string[] | null>,
  _themeManager?: ThemeManager | null
): UseThemeResult {
  const theme = state?.theme

  if (!theme || !_themeManager) {
    return emptyObject
  }

  curKeys = _keys
  curProps = _props
  curThemeManger = _themeManager

  if (ProxiedThemes.has(theme)) {
    const proxied = ProxiedThemes.get(theme)!
    return proxied
  }

  // first time running on this theme, create:
  // from here on only use current*

  const { name, scheme } = state

  const config = getConfig()

  function track(key: string) {
    if (!curKeys) return
    if (!curKeys.current) {
      curKeys.current = []
      // tracking new key for first time, do an update check
      // setTimeout(() => {
      //   curThemeManger?.selfUpdate()
      // })
    }
    curKeys.current.push(key)
    if (process.env.NODE_ENV === 'development' && curProps.debug) {
      console.info(` 🎨 useTheme() tracking new key: ${key}`)
    }
  }

  const proxied = Object.fromEntries(
    Object.entries(theme).flatMap(([key, value]) => {
      const proxied = {
        ...value,
        get val() {
          // when they touch the actual value we only track it if its a variable (web), its ignored!
          if (!globalThis.tamaguiAvoidTracking) {
            // always track .val
            track(key)
          }
          return value.val
        },
        get(platform?: 'web') {
          const outVal = getVariable(value)

          if (process.env.TAMAGUI_TARGET === 'native') {
            // ios can avoid re-rendering in some cases when we are using a root light/dark
            // disabled in cases where we have animations
            if (
              platform !== 'web' &&
              isIos &&
              !curProps.deopt &&
              getSetting('fastSchemeChange') &&
              !shouldDeoptDueToParentScheme(curThemeManger)
            ) {
              if (scheme) {
                const oppositeScheme = scheme === 'dark' ? 'light' : 'dark'
                const oppositeName = name.replace(scheme, oppositeScheme)
                const color = getVariable(config.themes[name]?.[key])
                const oppositeColor = getVariable(config.themes[oppositeName]?.[key])

                const dynamicVal = {
                  dynamic: {
                    [scheme]: color,
                    [oppositeScheme]: oppositeColor,
                  },
                }

                return dynamicVal
              }
            }

            if (process.env.NODE_ENV === 'development' && curProps.debug) {
              console.info(` 🎨 useTheme() tracking new key because of: 
                not web: ${platform !== 'web'}
                isIOS: ${isIos}
                deopt: ${curProps.deopt}
                fastScheme: ${getSetting('fastSchemeChange')}
                inversed: ${getIsInversed(curThemeManger)}
              `)
            }

            track(key)
          }

          return outVal
        },
      }

      return [
        [key, proxied],
        [`$${key}`, proxied],
      ]
    })
  ) as UseThemeResult

  ProxiedThemes.set(theme, proxied)

  return proxied
}

// to tell if we are inversing the scheme anywhere in the tree, if so we need to de-opt
function getIsInversed(manager?: ThemeManager) {
  if (process.env.TAMAGUI_TARGET === 'native') {
    let isInversed = false

    let cur: ThemeManager | null | undefined = manager

    while (cur) {
      if (!cur.parentManager) return isInversed
      if (cur.parentManager.state.scheme !== cur.state.scheme) {
        isInversed = !isInversed
      }
      cur = cur.parentManager
    }
  }

  return false
}

export const activeThemeManagers = new Set<ThemeManager>()

// until WeakRef support:
const _uidToManager = new WeakMap<Object, ThemeManager>()
const _idToUID: Record<number, Object> = {}
const getId = (id: number) => _idToUID[id]

export const getThemeManager = (id: number) => {
  return _uidToManager.get(getId(id)!)
}

const registerThemeManager = (t: ThemeManager) => {
  if (!_idToUID[t.id]) {
    const id = (_idToUID[t.id] = {})
    _uidToManager.set(id, t)
  }
}

const ogLog = console.error
const preventWarnSetState =
  process.env.NODE_ENV === 'production'
    ? ogLog
    : // temporary fix for logs, they are harmless in that i've tried to rewrite this
      // a few times using the "right" ways, but they are always slower. maybe skill issue
      (a?: any, ...args: any[]) => {
        if (typeof a === 'string' && a.includes('Cannot update a component')) {
          return
        }
        return ogLog(a, ...args)
      }

function getShouldUpdateTheme(
  props: UseThemeWithStateProps,
  parentManager: ThemeManager | null,
  keys: MutableRefObject<string[] | null> | undefined,
  themeState: ChangedThemeResponse | undefined,
  nextState?: ThemeManagerState | null,
  forceShouldChange = false
) {
  if (isServer) return
  if (
    !forceShouldChange &&
    !keys?.current &&
    (!themeState || !themeState.isNewTheme) &&
    !getHasThemeUpdatingProps(props)
  ) {
    return
  }
  const next = nextState || themeState?.themeManager?.getState(props, parentManager)
  if (forceShouldChange) {
    return next
  }
  if (!next || next.theme === themeState?.state?.theme) {
    return
  }
  return next
}

export const useChangeThemeEffect = (
  props: UseThemeWithStateProps,
  isRoot = false,
  keys?: MutableRefObject<string[] | null>
): ChangedThemeResponse => {
  const { disable } = props
  const parentManager = useContext(ThemeManagerContext)
  const shouldAlwaysUpdate = props.needsUpdate?.() === true ? true : undefined

  if ((!isRoot && !parentManager) || disable) {
    return {
      isNewTheme: false,
      state: parentManager?.state,
      themeManager: parentManager,
    }
  }

  // to test performance: uncomment
  // if (!disable && parentManager) {
  //   return {
  //     isNewTheme: false,
  //     state: {
  //       name: 'light',
  //       theme: getConfig().themes.light,
  //     },
  //     themeManager: parentManager!,
  //   }
  // }

  const [themeState, setThemeState] = useState<ChangedThemeResponse>(createState)

  const { state, mounted, isNewTheme, themeManager, prevState } = themeState
  const isInversingOnMount = Boolean(!themeState.mounted && props.inverse)

  if (process.env.TAMAGUI_TARGET === 'native') {
    if (themeManager) {
      const nextState = getShouldUpdateTheme(
        props,
        parentManager,
        keys,
        themeState,
        undefined,
        shouldAlwaysUpdate
      )
      if (nextState) {
        const next = createState(themeState, undefined, nextState)
        if (next.state?.name !== themeState.state?.name) {
          setThemeState(next)
          console.error = preventWarnSetState
          themeManager.notify()
          console.error = ogLog
        }
      }
    }
  }

  if (!isServer) {
    if (process.env.TAMAGUI_TARGET === 'web') {
      useLayoutEffect(() => {
        // one homepage breaks on useTheme() in MetaTheme if this isnt set up
        if (themeManager && state && prevState && state !== prevState) {
          themeManager.notify()
        }
      }, [state])
    }

    // listen for parent change + notify children change
    useEffect(() => {
      if (!themeManager) return

      // SSR safe inverse (because server can't know prefers scheme)
      // could be done through fancy selectors like how we do prefers-media
      // but may be a bit of explosion of selectors
      if (props.inverse && !mounted) {
        setThemeState((prev) => {
          return createState({
            ...prev,
            mounted: true,
          })
        })
        return
      }

      if (isNewTheme || isRoot) {
        activeThemeManagers.add(themeManager)

        if (process.env.NODE_ENV === 'development') {
          if (isRoot) {
            globalThis['TamaguiRootThemeManager'] ||= themeManager
          }
        }
      }

      const updated = getShouldUpdateTheme(
        props,
        parentManager,
        keys,
        themeState,
        undefined,
        shouldAlwaysUpdate
      )

      if (updated) {
        setThemeState((prev) => createState(prev, undefined, updated))
      }

      // for updateTheme/replaceTheme
      const selfListenerDispose = themeManager.onChangeTheme((_a, _b, forced) => {
        if (forced) {
          setThemeState((prev) => {
            const next = createState(prev, forced !== 'self')
            return next
          })
        }
      }, true)

      const disposeChangeListener = parentManager?.onChangeTheme(
        (name, manager, forced) => {
          const force =
            forced ||
            (!isServer ? (keys?.current ? true : undefined) : undefined) ||
            props.deopt ||
            // this fixes themeable() not updating with the new fastSchemeChange setting
            (process.env.TAMAGUI_TARGET === 'native'
              ? props['disable-child-theme']
              : undefined)

          const shouldTryUpdate = force ?? Boolean(keys?.current || isNewTheme)

          if (process.env.NODE_ENV === 'development' && props.debug === 'verbose') {
            // prettier-ignore
            console.info(` 🔸 onChange`, {
              id: themeManager.id,
              force,
              shouldTryUpdate,
              props,
              name,
              keys,
            })
          }

          if (shouldTryUpdate) {
            setThemeState((prev) => {
              return createState(prev, true)
            })
          }
        },
        themeManager.id
      )

      return () => {
        selfListenerDispose()
        disposeChangeListener?.()
        if (isNewTheme) {
          activeThemeManagers.delete(themeManager)
        }
      }
    }, [
      themeManager,
      parentManager,
      isNewTheme,
      props.componentName,
      props.inverse,
      props.name,
      props.reset,
      mounted,
    ])

    if (process.env.NODE_ENV === 'development' && props.debug !== 'profile') {
      useEffect(() => {
        globalThis['TamaguiThemeManagers'] ??= new Set()
        globalThis['TamaguiThemeManagers'].add(themeManager)
        return () => {
          globalThis['TamaguiThemeManagers'].delete(themeManager)
        }
      }, [themeManager])
    }
  }

  if (isWeb && isInversingOnMount) {
    return {
      isNewTheme: false,
      inversed: false,
      themeManager: parentManager,
      state: {
        name: '',
        ...parentManager?.state,
        className: '',
      },
    }
  }

  return {
    state,
    isNewTheme,
    inversed: !!props.inverse,
    themeManager,
  }

  function createState(
    prev?: ChangedThemeResponse,
    force = false,
    foundNextState?: ThemeManagerState
  ): ChangedThemeResponse {
    if (prev && !foundNextState && !keys?.current && !force) {
      return prev
    }

    //  returns previous theme manager if no change
    let themeManager: ThemeManager = parentManager!
    let state: ThemeManagerState | undefined
    const hasThemeUpdatingProps = getHasThemeUpdatingProps(props)

    if (hasThemeUpdatingProps) {
      const parentManagerProp = isRoot ? 'root' : parentManager
      if (prev?.themeManager) {
        themeManager = prev.themeManager

        // this could be a bit better, problem is on toggling light/dark the state is actually
        // showing light even when the last was dark. but technically allso onChangeTheme should
        // basically always call on a change, so i'm wondering if we even need the shouldUpdate
        // at all anymore. this forces updates onChangeTheme for all dynamic style accessed components
        // which is correct, potentially in the future we can avoid forceChange and just know to
        // update if keys.length is set + onChangeTheme called
        const forceChange =
          force || shouldAlwaysUpdate || (keys?.current ? true : undefined)

        let nextState: ThemeManagerState | null | undefined = null

        // avoid some work if we already found it
        if (foundNextState) {
          nextState = foundNextState
        } else {
          const next = themeManager.getState(props, parentManager)
          nextState = getShouldUpdateTheme(
            props,
            parentManager,
            keys,
            prev,
            next,
            forceChange
          )
        }

        if (nextState) {
          state = nextState

          if (!prev.isNewTheme && !isRoot) {
            themeManager = new ThemeManager(props, parentManagerProp)
          } else {
            themeManager.updateState(nextState)
          }
        } else {
          if (prev.isNewTheme) {
            // reset to parent
            if (parentManager && !nextState) {
              themeManager = parentManager
            }
          }
        }
      } else {
        themeManager = new ThemeManager(props, parentManagerProp)
        state = { ...themeManager.state }
      }
    }

    const isNewTheme = Boolean(themeManager !== parentManager || props.inverse)

    if (isNewTheme) {
      registerThemeManager(themeManager)
    }

    const isWebSSR = isWeb ? !getSetting('disableSSR') : false
    const mounted = isWebSSR ? isRoot || prev?.mounted : true

    if (!state) {
      if (isNewTheme) {
        state = themeManager.state
      } else {
        state = parentManager!.state
        themeManager = parentManager!
      }
    }

    const response: ChangedThemeResponse = {
      themeManager,
      isNewTheme,
      mounted,
    }

    if (props.inverse) {
      response.inversed = true
    }

    const shouldReturnPrev =
      prev &&
      !force &&
      // isEqualShallow uses the second arg as the keys so this should compare without state first...
      isEqualShallow(prev, response) &&
      // ... and then compare just the state, because we make a new state obj but is likely the same
      isEqualShallow(prev.state, state)

    if (prev && shouldReturnPrev) {
      return prev
    }

    // after we compare equal we set the state
    response.state = state
    response.prevState = prev?.state

    if (process.env.NODE_ENV === 'development' && props['debug'] && isClient) {
      console.groupCollapsed(`🔷 [${themeManager.id}] useChangeThemeEffect createState`)
      const parentState = { ...parentManager?.state }
      const parentId = parentManager?.id
      const themeManagerState = { ...themeManager.state }
      console.info({
        props,
        parentState,
        parentId,
        themeManager,
        prev,
        response,
        themeManagerState,
      })
      console.groupEnd()
    }

    return response
  }
}
