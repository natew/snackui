import { GetProps, styled } from '@tamagui/core'

import { focusableInputHOC } from '../helpers/focusableInputHOC'
import { textAreaSizeVariant } from '../helpers/inputHelpers'
import { InputFrame } from './Input'

const TextAreaFrame = styled(InputFrame, {
  name: 'TextArea',
  multiline: true,
  numberOfLines: 4,
  height: 'auto',

  focusStyle: {
    margin: -1,
    borderColor: '$borderColorFocus',
    borderWidth: 2,
  },

  variants: {
    size: {
      '...size': textAreaSizeVariant,
    },
  },
})

export type TextAreaProps = GetProps<typeof TextArea>

export const TextArea = InputFrame.extractable(focusableInputHOC(TextAreaFrame))
