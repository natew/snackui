import { isWeb } from '@tamagui/constants'
import type { GetProps } from '@tamagui/core'
import { styled, useComposedRefs, useTheme } from '@tamagui/core'
import { registerFocusable, useFocusable } from '@tamagui/focusable'
import { TextInput } from 'react-native'

import { inputSizeVariant } from '../helpers/inputHelpers'
import { useEffect, useRef } from 'react'

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
    borderColor: '$borderColorFocus',
  },

  focusVisibleStyle: {
    outlineColor: '$outlineColor',
    outlineWidth: 2,
    outlineStyle: 'solid',
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

export const Input = InputFrame.styleable<InputExtraProps>((propsIn, forwardedRef) => {
  const ref = useRef<Input>(null)
  const composedRefs = useComposedRefs(forwardedRef, ref)
  const props = useInputProps(propsIn, composedRefs)

  if (process.env.TAMAGUI_TARGET === 'native') {
    useEffect(() => {
      if (!props.id) return
      if (props.disabled) return

      return registerFocusable(props.id, {
        focusAndSelect: () => {
          ref.current?.focus()
        },
        focus: () => {},
      })
    }, [props.id, props.disabled])
  }

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
