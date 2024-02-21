import { isWeb } from '@tamagui/constants'
import type { GetProps } from '@tamagui/core'
import { styled, useTheme } from '@tamagui/core'
import { useFocusable } from '@tamagui/focusable'
import { TextInput } from 'react-native'

import { inputSizeVariant } from '../helpers/inputHelpers'

export const defaultStyles = {
  size: '$true',
  fontFamily: '$body',
  borderWidth: 1,
  outlineWidth: 0,
  color: '$color',

  ...(isWeb
    ? {
        tabIndex: 0,
      }
    : {
        focusable: true,
      }),

  borderColor: '$borderColor',
  backgroundColor: '$background',

  // this fixes a flex bug where it overflows container
  minWidth: 0,

  hoverStyle: {
    borderColor: '$borderColorHover',
  },

  focusStyle: {
    outlineColor: '$outlineColor',
    outlineWidth: 2,
    outlineStyle: 'solid',
    borderColor: '$borderColorFocus',
  },
} as const

export const InputFrame = styled(
  TextInput,
  {
    name: 'Input',

    variants: {
      unstyled: {
        false: defaultStyles,
      },

      size: {
        '...size': inputSizeVariant,
      },

      disabled: {
        true: {},
      },
    } as const,

    defaultVariants: {
      unstyled: process.env.TAMAGUI_HEADLESS === '1' ? true : false,
    },
  },
  {
    isInput: true,
    accept: {
      placeholderTextColor: 'color',
      selectionColor: 'color',
    } as const,
  }
)

// const x = <InputFrame selectionColor="" />

export type Input = TextInput

export type InputFrameProps = GetProps<typeof InputFrame>

export type InputExtraProps = {
  rows?: number
}

export type InputProps = InputFrameProps & InputExtraProps

export const Input = InputFrame.styleable<InputExtraProps>((propsIn, ref) => {
  const props = useInputProps(propsIn, ref)
  return <InputFrame {...props} />
})

export function useInputProps(props: InputProps, ref: any) {
  const theme = useTheme()
  const { onChangeText, ref: combinedRef } = useFocusable({
    // @ts-ignore
    props,
    ref,
    isInput: true,
  })

  const placeholderColorProp = props.placeholderTextColor
  const placeholderTextColor =
    theme[placeholderColorProp as any]?.get() ??
    placeholderColorProp ??
    theme.placeholderColor?.get()

  return {
    ref: combinedRef,
    readOnly: props.disabled,
    ...props,
    placeholderTextColor,
    onChangeText,
  }
}
