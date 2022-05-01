import { GenericFont, createFont, getVariableValue } from '@tamagui/core'
import { Platform } from 'react-native'

export const createInterFont = <A extends GenericFont<keyof typeof defaultSizes>>(
  font: {
    [Key in keyof Partial<A>]?: Partial<A[Key]>
  } = {},
  {
    sizeLineHeight = (size) => size + 10,
    sizeSize = (size) => size * 1,
  }: {
    sizeLineHeight?: (fontSize: number) => number
    sizeSize?: (size: number) => number
  } = {}
): GenericFont<keyof typeof defaultSizes> => {
  // merge to allow individual overrides
  const size = Object.fromEntries(
    Object.entries({
      ...defaultSizes,
      ...font.size,
    }).map(([k, v]) => [k, sizeSize(v)])
  )
  return createFont({
    family:
      Platform.OS == 'web'
        ? 'Inter, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
        : 'Inter',
    lineHeight: Object.fromEntries(
      Object.entries(size).map(([k, v]) => [k, sizeLineHeight(getVariableValue(v))])
    ),
    weight: {
      4: '300',
    },
    letterSpacing: {
      4: 0,
    },
    ...(font as any),
    size,
  })
}

const defaultSizes = {
  1: 11,
  2: 12,
  3: 13,
  4: 14,
  5: 17,
  6: 18,
  7: 20,
  8: 23,
  9: 30,
  10: 45,
  11: 58,
  12: 64,
  13: 76,
  14: 102,
  15: 124,
  16: 144,
} as const
