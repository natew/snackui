import {
  SizeVariantSpreadFunction,
  getVariableValue,
  isWeb,
  stepTokenUpOrDown,
} from '@tamagui/core'
import { getButtonSized } from '@tamagui/get-button-sized'
import { getFontSized } from '@tamagui/get-font-sized'

export const inputSizeVariant: SizeVariantSpreadFunction<any> = (
  val = '$true',
  extras
) => {
  if (extras.props.multiline || extras.props.numberOfLines > 1) {
    return textAreaSizeVariant(val, extras)
  }
  const buttonStyles = getButtonSized(val, extras)
  const paddingHorizontal = stepTokenUpOrDown(extras.tokens.space, val, -1, [2])
  const fontStyle = getFontSized(val, extras)
  // lineHeight messes up input on native
  if (!isWeb && fontStyle) {
    delete fontStyle['lineHeight']
  }
  return {
    ...fontStyle,
    ...buttonStyles,
    paddingHorizontal,
  }
}

export const textAreaSizeVariant: SizeVariantSpreadFunction<any> = (
  val = '$true',
  extras
) => {
  const { props } = extras
  const buttonStyles = getButtonSized(val, extras)
  const fontStyle = getFontSized(val, extras)!
  const height = props.numberOfLines
    ? (props.numberOfLines || 1) * getVariableValue(fontStyle.lineHeight)
    : 'auto'
  const paddingVertical = stepTokenUpOrDown(extras.tokens.space, val, -2, [2])
  const paddingHorizontal = stepTokenUpOrDown(extras.tokens.space, val, -1, [2])
  return {
    ...buttonStyles,
    ...fontStyle,
    paddingVertical,
    paddingHorizontal,
    height,
  }
}
