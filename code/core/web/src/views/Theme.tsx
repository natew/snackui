import { isWeb } from '@tamagui/constants'
import type { MutableRefObject } from 'react'
import React, { Children, cloneElement, forwardRef, isValidElement, useRef } from 'react'
import { variableToString } from '../createVariable'
import { log } from '../helpers/log'
import { useThemeWithState } from '../hooks/useTheme'
import { getThemeState, ThemeStateContext, type ThemeState } from '../hooks/useThemeState'
import type { ThemeProps } from '../types'
import { ThemeDebug } from './ThemeDebug'

export const Theme = forwardRef(function Theme({ children, ...props }: ThemeProps, ref) {
  // @ts-expect-error only for internal views
  if (props.disable) {
    return children
  }

  const isRoot = !!props['_isRoot']
  const [_, themeState] = useThemeWithState(props)
  const disableDirectChildTheme = props['disable-child-theme']

  console.log('got', isRoot, props, themeState)

  let finalChildren = disableDirectChildTheme
    ? Children.map(children, (child) =>
        cloneElement(child, { ['data-disable-theme']: true })
      )
    : children

  if (ref) {
    try {
      React.Children.only(finalChildren)
      finalChildren = cloneElement(finalChildren, { ref })
    } catch {
      //ok
    }
  }

  if (process.env.NODE_ENV === 'development') {
    if (props.debug === 'visualize') {
      finalChildren = (
        <ThemeDebug themeState={themeState} themeProps={props}>
          {finalChildren}
        </ThemeDebug>
      )
    }
  }

  const stateRef = useRef({
    hasEverThemed: false,
  })

  return getThemedChildren(themeState, finalChildren, props, isRoot, stateRef)
})

Theme['avoidForwardRef'] = true

export function getThemedChildren(
  themeState: ThemeState,
  children: any,
  props: ThemeProps,
  isRoot = false,
  stateRef: MutableRefObject<{ hasEverThemed?: boolean }>
) {
  const { shallow, forceClassName } = props

  // always be true if ever themed so we avoid re-parenting
  let shouldRenderChildrenWithTheme =
    themeState.isNew ||
    isRoot ||
    'inverse' in props ||
    'name' in props ||
    'reset' in props ||
    'forceClassName' in props ||
    stateRef.current.hasEverThemed

  if (shouldRenderChildrenWithTheme) {
    stateRef.current.hasEverThemed = true
  }

  if (!shouldRenderChildrenWithTheme) {
    return children
  }

  if (process.env.NODE_ENV === 'development') {
    if (shouldRenderChildrenWithTheme && props.debug === 'verbose') {
      log(
        `adding theme: isRoot ${isRoot}, inverse ${'inverse' in props}, isNewTheme ${themeState.isNew}, hasEver ${stateRef.current.hasEverThemed}`,
        props
      )
    }
  }

  let next = children

  // each children of these children wont get the theme
  if (shallow) {
    if (!themeState.parentId) throw new Error(`‼️`)
    const parentState = getThemeState(themeState.parentId)
    if (!parentState) throw new Error(`‼️`)
    next = Children.toArray(children).map((child) => {
      return isValidElement(child)
        ? cloneElement(
            child,
            undefined,
            <Theme name={parentState.name}>{(child as any).props.children}</Theme>
          )
        : child
    })
  }

  const elementsWithContext = (
    <ThemeStateContext.Provider value={themeState.id}>{next}</ThemeStateContext.Provider>
  )

  if (forceClassName === false) {
    return elementsWithContext
  }

  if (isWeb) {
    return wrapThemeElements({
      children: elementsWithContext,
      themeState,
      forceClassName,
      isRoot,
    })
  }

  return elementsWithContext
}

function wrapThemeElements({
  children,
  themeState,
  forceClassName,
  isRoot,
}: {
  children?: React.ReactNode
  themeState: ThemeState
  forceClassName?: boolean
  isRoot?: boolean
}) {
  const inverse = themeState.inversed
  const requiresExtraWrapper = typeof inverse === 'boolean' || forceClassName

  console.log('requiresExtraWrapper', requiresExtraWrapper, { inverse, forceClassName })

  const { className, style } = getThemeClassNameAndStyle(themeState, isRoot)

  let themedChildren = (
    <span className={`${className} _dsp_contents is_Theme`} style={style}>
      {children}
    </span>
  )

  // to prevent tree structure changes always render this if inverse is true or false
  if (requiresExtraWrapper) {
    const name = themeState?.name || ''
    const inverseClassName = name.startsWith('light')
      ? 't_light is_inversed'
      : name.startsWith('dark')
        ? 't_dark is_inversed'
        : ''

    themedChildren = (
      <span className={`${inverse ? inverseClassName : ''} _dsp_contents`}>
        {themedChildren}
      </span>
    )
  }

  return themedChildren
}

const emptyObj = {}
const empty = { className: '', style: emptyObj }

function getThemeClassNameAndStyle(themeState: ThemeState, isRoot = false) {
  if (!themeState.isNew) {
    return empty
  }

  // in order to provide currentColor, set color by default
  const themeColor =
    themeState?.theme && themeState.isNew ? variableToString(themeState.theme.color) : ''

  const style = themeColor
    ? {
        color: themeColor,
      }
    : undefined

  const className = `${isRoot ? '' : 't_sub_theme'} t_${themeState.name.replace(schemePrefix, '')}`

  return { style, className }
}

const schemePrefix = /^(dark|light)_/
