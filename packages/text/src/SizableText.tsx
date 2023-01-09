import { GetProps, Text, styled } from '@tamagui/core'
import { getFontSized } from '@tamagui/get-font-sized'

export const SizableText = styled(Text, {
  name: 'SizableText',
  fontFamily: '$body',

  variants: {
    size: getFontSized,
  } as const,

  defaultVariants: {
    size: '$true',
  },
})

export type SizableTextProps = GetProps<typeof SizableText>
