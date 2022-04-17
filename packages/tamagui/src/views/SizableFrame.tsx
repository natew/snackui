import { GetProps, Variable, VariantSpreadExtras, isVariable } from '@tamagui/core'
import { styled } from '@tamagui/core'

import { XStack } from './Stacks'

// for use in button-like things

export const getSize =
  (sizeX = 0.8, sizeY = 0.333) =>
  (val: any, { tokens }: VariantSpreadExtras<any>) => {
    const size = tokens.size[val] ?? tokens.size['$4'] ?? val ?? 14
    const radius = tokens.radius[val] ?? tokens.radius['$4'] ?? size
    const px = Math.round(+(isVariable(size) ? size.val : size) * sizeX)
    const py = Math.round(+(isVariable(size) ? size.val : size) * sizeY)
    return {
      paddingHorizontal: px,
      paddingVertical: py,
      borderRadius: radius,
    }
  }

export const getButtonSize = getSize()

export const SizableFrame = styled(XStack, {
  borderRadius: '$1',
  paddingVertical: '$2',
  paddingHorizontal: '$3',
  backgroundColor: '$background',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  flexWrap: 'nowrap',
  flexDirection: 'row',
  flexShrink: 1,

  variants: {
    hoverable: {
      true: {
        hoverStyle: {
          backgroundColor: '$backgroundHover',
        },
      },
    },

    pressable: {
      true: {
        pressStyle: {
          backgroundColor: '$backgroundPress',
        },
      },
    },

    focusable: {
      true: {
        focusStyle: {
          backgroundColor: '$backgroundFocus',
        },
      },
    },

    bordered: {
      true: {
        borderWidth: 1,
        borderColor: '$borderColor',
      },
    },

    size: {
      '...size': (val, extras) => getButtonSize(val, extras),
    },

    circular: {
      true: (_, { props, tokens }) => {
        const sizeVal = props['size'] ?? '$4'
        const size = tokens.size[sizeVal] ?? 44
        const sizePx = +(isVariable(size) ? size.val : size)
        return {
          width: sizePx * 2,
          maxWidth: sizePx * 2,
          height: sizePx * 2,
          maxHeight: sizePx * 2,
          overflow: 'hidden',
          borderRadius: 100_000,
          paddingVertical: 0,
          paddingHorizontal: 0,
        }
      },
    },

    disabled: {
      true: {
        // pointerEvents: 'none',
        opacity: 0.45,
        backgroundColor: '$bg',
        hoverStyle: {
          backgroundColor: '$bg',
        },
      },
    },

    active: {
      true: {
        backgroundColor: '$bg3',
      },
    },

    transparent: {
      true: {
        backgroundColor: 'transparent',
      },
    },

    chromeless: {
      true: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        shadowColor: 'transparent',
        // this would be a breaking change...
        // hoverStyle: {
        //   backgroundColor: 'transparent',
        // },
      },
    },
  },
})

export type SizableFrameProps = GetProps<typeof SizableFrame>
