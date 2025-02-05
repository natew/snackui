import { isWeb } from '@tamagui/constants'
import type { MutableRefObject } from 'react'
import React, { Children, cloneElement, forwardRef, isValidElement, useRef } from 'react'
import { variableToString } from '../createVariable'
import { log } from '../helpers/log'
import { useThemeWithState } from '../hooks/useTheme'
import { getThemeState, ThemeStateContext, type ThemeState } from '../hooks/useThemeState'
import type { ThemeProps } from '../types'
import { ThemeDebug } from './ThemeDebug'
import { getSetting } from '../config'

const empty = { className: '', style: {} }

export const Theme = forwardRef(function Theme(props: ThemeProps, ref) {
  // @ts-expect-error only for internal views
  if (props.disable) {
    return props.children
  }

  const isRoot = !!props['_isRoot']
  const [_, themeState] = useThemeWithState(props, isRoot)

  const disableDirectChildTheme = props['disable-child-theme']

  let finalChildren = disableDirectChildTheme
    ? Children.map(props.children, (child) =>
        cloneElement(child, { ['data-disable-theme']: true })
      )
    : props.children

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
  stateRef: MutableRefObject<{ hasEverThemed?: boolean | 'wrapped' }>
) {
  const { shallow, forceClassName } = props

  // always be true if ever themed so we avoid re-parenting
  const state = stateRef.current
  let hasEverThemed = state.hasEverThemed

  let shouldRenderChildrenWithTheme =
    hasEverThemed ||
    themeState.isNew ||
    isRoot ||
    'inverse' in props ||
    'name' in props ||
    'reset' in props ||
    'forceClassName' in props

  if (!shouldRenderChildrenWithTheme) {
    return children
  }

  const id = themeState.isNew ? themeState.id : themeState.parentId || themeState.id

  children = (
    <ThemeStateContext.Provider value={id}>{children}</ThemeStateContext.Provider>
  )

  const { isInverse, name } = themeState
  const requiresExtraWrapper = isInverse || forceClassName

  // it only ever progresses from false => true => 'wrapped'
  if (!state.hasEverThemed) {
    state.hasEverThemed = true
  }
  if (
    requiresExtraWrapper ||
    // if the theme is exactly dark or light, its likely to change between dark/light
    // and that would require wrapping which would re-parent, so to avoid re-parenting do this
    themeState.name === 'dark' ||
    themeState.name === 'light'
  ) {
    state.hasEverThemed = 'wrapped'
  }

  // each children of these children wont get the theme
  if (shallow) {
    if (!themeState.parentId) {
      console.warn('SHALLOW 🐞 how?', themeState)
    } else {
      const parentState = getThemeState(themeState.parentId)
      if (!parentState) throw new Error(`‼️010`)
      children = Children.toArray(children).map((child) => {
        return isValidElement(child)
          ? cloneElement(
              child,
              undefined,
              <Theme name={parentState.name}>{(child as any).props.children}</Theme>
            )
          : child
      })
    }
  }

  if (forceClassName === false) {
    return children
  }

  if (isWeb) {
    const { className, style } = getThemeClassNameAndStyle(themeState, isRoot)

    children = (
      <span className={`${className} _dsp_contents is_Theme`} style={style}>
        {children}
      </span>
    )

    // to prevent tree structure changes always render this if inverse is true or false
    if (state.hasEverThemed === 'wrapped') {
      // but still calculate if we need the classnames
      const className = requiresExtraWrapper
        ? `${
            isInverse
              ? name.startsWith('light')
                ? 't_light is_inversed'
                : name.startsWith('dark')
                  ? 't_dark is_inversed'
                  : ''
              : ''
          } _dsp_contents`
        : `_dsp_contents`
      children = <span className={className}>{children}</span>
    }

    return children
  }

  return children
}

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

  const maxInverses = getSetting('maxDarkLightNesting') || 3
  const themeClassName =
    themeState.inverses >= maxInverses
      ? themeState.name
      : themeState.name.replace(schemePrefix, '')

  const className = `${isRoot ? '' : 't_sub_theme'} t_${themeClassName}`

  return { style, className }
}

const schemePrefix = /^(dark|light)_/
