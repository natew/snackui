import React, { forwardRef, useId } from 'react'

import { DebugProp, ThemeName } from '../types.js'
import { Theme } from '../views/Theme.js'

export interface ThemeableProps {
  theme?: ThemeName | null
  themeInverse?: boolean
  themeReset?: boolean
  componentName?: string
  debug?: DebugProp
}

export function themeable<Component extends (props: any) => any>(
  component: Component,
  opts?: { componentName?: string }
) {
  const withThemeComponent = forwardRef(function WithTheme(props: ThemeableProps, ref) {
    const { themeInverse, theme, componentName, themeReset, ...rest } = props
    const element = React.createElement(component, { ...rest, ref } as any)

    return (
      <Theme
        inverse={themeInverse}
        componentName={componentName || opts?.componentName}
        name={(theme as any) || null}
        disable-child-theme
        debug={props.debug}
        reset={props.themeReset}
      >
        {element}
      </Theme>
    )
  })

  const withTheme: any = withThemeComponent
  withTheme.displayName = `Themed(${
    (component as any)?.displayName || (component as any)?.name || 'Anonymous'
  })`

  return withTheme as Component extends (props: infer P) => infer R
    ? (props: Omit<P, 'theme' | 'themeInverse'> & ThemeableProps) => R
    : unknown
}
