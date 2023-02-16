import {
  GenericFont,
  SizeValue,
  createFont,
  getVariableValue,
  isWeb,
} from '@tamagui/core'

export const createInterFont = <A extends GenericFont<keyof typeof defaultSizes>>(
  font: {
    [Key in keyof Partial<A>]?: Partial<A[Key]>
  } = {},
  {
    sizeLineHeight = (size: SizeValue) => (typeof size === 'number' ? size + 10 : size),
    sizeSize = (size: SizeValue) => size,
  }: {
    sizeLineHeight?: (fontSize: SizeValue, forKey: string) => SizeValue
    sizeSize?: (size: SizeValue, forKey: string) => SizeValue
  } = {}
): A => {
  // merge to allow individual overrides
  const size = Object.fromEntries(
    Object.entries({
      ...defaultSizes,
      ...font.size,
    }).map(([k, v]) => [k, sizeSize(v, k)])
  )
  return createFont<A>({
    family: isWeb
      ? 'Inter, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
      : 'Inter',
    lineHeight: Object.fromEntries(
      Object.entries(size).map(([k, v]) => [k, sizeLineHeight(getVariableValue(v), k)])
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
  true: 14,
  5: 16,
  6: 18,
  7: 20,
  8: 23,
  9: 30,
  10: 46,
  11: 55,
  12: 62,
  13: 72,
  14: 92,
  15: 114,
  16: 134,
} as const
