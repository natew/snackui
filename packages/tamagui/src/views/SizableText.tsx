import { GetProps, Text, isVariable, styled } from '@tamagui/core'

export const sizableTextSizeVariant = (val = '$4', { tokens, props }) => {
  const family = (
    typeof props.fontFamily === 'string'
      ? props.fontFamily
      : isVariable(props.fontFamily)
      ? props.fontFamily.val
      : props.fontFamily || '$body'
  ) as any
  const font = tokens.font[family] ?? tokens.font['$body']
  if (!font) {
    console.warn('⚠️ no font found', { family, fontTokens: Object.keys(tokens.font), val })
    return {}
  }
  const fontFamily = font.family
  const fontSize = props.fontSize || font.size[val]
  const lineHeight = props.lineHeight || font.lineHeight[val]
  const fontWeight = props.fontWeight || font.weight[val]
  const letterSpacing = props.letterSpacing || font.letterSpacing[val]
  return {
    fontFamily,
    fontWeight,
    letterSpacing,
    fontSize,
    lineHeight,
  }
}

export const SizableText = styled(Text, {
  cursor: 'text',

  variants: {
    size: {
      // TODO this should be ...fontSize type not working
      '...size': sizableTextSizeVariant,
    },
  },
})

export type SizableTextProps = GetProps<typeof SizableText>
