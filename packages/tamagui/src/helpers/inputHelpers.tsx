import { SizeVariantSpreadFunction, TextProps } from '@tamagui/core'

import { getButtonSize } from './getButtonSize'
import { sizableTextSizeVariant } from './sizableTextSizeVariant'

const inputSizeFrame = getButtonSize(0.75, 0.75)

export const inputSizeVariant: SizeVariantSpreadFunction<any> = (val = '$4', props) => {
  const frame = inputSizeFrame(val, props)
  const font = sizableTextSizeVariant(val, props)
  return {
    ...frame,
    ...font,
    minHeight: 'auto',
  }
}
