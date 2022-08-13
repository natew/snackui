import React, { memo, useMemo } from 'react'

import { isWeb } from '../constants/platform'
import { variableToString } from '../createVariable'
import { ThemeManager, ThemeManagerContext } from '../helpers/ThemeManager'
import { ThemeProps, useChangeThemeEffect } from '../hooks/useTheme'

// bugfix esbuild strips react jsx: 'preserve'
React['createElement']

export const Theme = memo(function Theme(props: ThemeProps) {
  const { name, theme, themeManager, themes, className } = useChangeThemeEffect(
    props.name,
    props.componentName,
    props
  )

  const missingTheme = !themes || !name || !theme

  // memo here, changing theme without re-rendering all children is a critical optimization
  // may require some effort of end user to memoize but without this memo they'd have no option
  const contents = useMemo(
    () => (missingTheme ? null : wrapThemeManagerContext(props.children, themeManager)),
    [missingTheme, props.children, themeManager]
  )

  if (missingTheme) {
    if (name && !theme && process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.warn(`No theme found by name ${name}`)
    }
    return props.children
  }

  if (isWeb) {
    return (
      <span
        className={(!props.disableThemeClass
          ? [props.className, className].filter(Boolean)
          : []
        ).join(' ')}
        style={{
          display: 'contents',
          // in order to provide currentColor, set color by default
          color: variableToString(themes[name]?.color),
        }}
      >
        {contents}
      </span>
    )
  }

  return contents
})

export function wrapThemeManagerContext(
  children: any,
  themeManager?: ThemeManager | null,
  shouldSetChildrenThemeToParent?: boolean
) {
  return themeManager ? (
    <ThemeManagerContext.Provider value={themeManager}>
      {shouldSetChildrenThemeToParent ? (
        <Theme name={themeManager.parentName}>{children}</Theme>
      ) : (
        children
      )}
    </ThemeManagerContext.Provider>
  ) : (
    children
  )
}
