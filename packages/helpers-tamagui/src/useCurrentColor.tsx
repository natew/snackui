import { ColorTokens, ThemeValueFallback, useTheme, variableToString } from '@tamagui/core'
import type { TextStyle } from 'react-native'

export const useCurrentColor = (colorProp: ColorProp) => {
  const theme = useTheme()
  // get color from prop or theme
  let color: any
  // @ts-expect-error
  if (theme && colorProp && colorProp in theme) {
    // @ts-expect-error
    color = theme[colorProp]
  } else if (colorProp) {
    color = colorProp
  } else {
    color = theme?.color
  }
  return variableToString(color)
}

export type ColorProp = ThemeValueFallback | ColorTokens | TextStyle['color'] | undefined
