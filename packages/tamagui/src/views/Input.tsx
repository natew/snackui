import { GetProps, styled } from '@tamagui/core'
import { focusableInputHOC } from '@tamagui/focusable'
import { TextInput } from 'react-native'

import { inputSizeVariant } from '../helpers/inputHelpers'

export const InputFrame = styled(TextInput, {
  name: 'Input',
  borderWidth: 1,
  color: '$color',
  focusable: true,
  borderColor: '$borderColor',
  backgroundColor: '$background',

  // this fixes a flex bug where it overflows container
  minWidth: 0,

  hoverStyle: {
    borderColor: '$borderColorHover',
  },

  focusStyle: {
    borderColor: '$borderColorFocus',
    borderWidth: 2,
    marginHorizontal: -1,
  },

  variants: {
    size: {
      '...size': inputSizeVariant,
    },
  },

  defaultVariants: {
    size: '$4',
  },
})

export type InputProps = GetProps<typeof InputFrame>

export const Input = InputFrame.extractable(focusableInputHOC(InputFrame))
