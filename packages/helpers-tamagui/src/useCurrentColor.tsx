import {
  ColorTokens,
  ThemeValueFallback,
  getTokens,
  useTheme,
  variableToString,
} from '@tamagui/core'
import type { TextStyle } from 'react-native'

export const useCurrentColor = (colorProp: ColorProp) => {
  const theme = useTheme()
  return variableToString(
    theme[colorProp as any] ||
      getTokens(true).color[colorProp as any] ||
      colorProp ||
      theme.color
  )
}

export type ColorProp = ThemeValueFallback | ColorTokens | TextStyle['color'] | undefined
