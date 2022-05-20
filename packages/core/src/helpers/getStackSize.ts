import { VariantSpreadExtras, getVariableValue, isVariable } from '@tamagui/core'

import { SizeTokens } from '../types'

// for use in sizable things

type ScaleProps = { sizeX: number; sizeY: number }

export const getSizeScaledToFont = (
  val: string | number,
  { sizeX = 1, sizeY = 1 }: ScaleProps,
  { tokens, props, fonts }: VariantSpreadExtras<any>
) => {
  const size = tokens.size[val] ?? tokens.size['$4'] ?? val ?? 14
  const radius = tokens.radius[val] ?? tokens.radius['$4'] ?? size
  const px = Math.round(+(isVariable(size) ? size.val : size) * sizeX)
  const py = Math.round(+(isVariable(size) ? size.val : size) * sizeY)
  // keep buttons height aligned to the font used
  const font = fonts[props.fontFamily] || fonts['$body']
  const lineHeights = font.lineHeight
  const lineHeight = lineHeights[val] ?? lineHeights['$4']
  const minHeight = Math.round(getVariableValue(lineHeight) + py * 2)
  return {
    px,
    py,
    radius,
    size,
    lineHeight,
    minHeight,
  }
}

export const createGetStackSize =
  (scale: ScaleProps) => (val: SizeTokens | number, extras: VariantSpreadExtras<any>) => {
    const { props } = extras
    const { radius, minHeight, px, py } = getSizeScaledToFont(val, scale, extras)
    return {
      minHeight,
      paddingHorizontal: props.circular ? 0 : px,
      paddingVertical: props.circular ? 0 : py,
      borderRadius: props.circular ? 100_000 : props.borderRadius ?? radius,
    }
  }

export const buttonScaling = { sizeX: 0.9, sizeY: 0.333 }
export const getButtonSize = createGetStackSize(buttonScaling)
