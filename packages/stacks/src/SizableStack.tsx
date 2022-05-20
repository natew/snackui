import { GetProps, getButtonSize, styled } from '@tamagui/core'

import { YStack } from './Stacks'
import { focusable, hoverable, pressable } from './variants'

export const SizableStack = styled(YStack, {
  name: 'SizableStack',
  backgroundColor: '$background',
  flexDirection: 'row',
  flexShrink: 1,

  variants: {
    // allows the type to come in for use in size
    fontFamily: () => ({}),
    hoverable,
    pressable,
    focusable,
    size: {
      '...size': getButtonSize,
    },
  },
})

export type SizableStackProps = GetProps<typeof SizableStack>
