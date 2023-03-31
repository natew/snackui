import { getSize } from '@tamagui/get-size'
import { ThemeableStack } from '@tamagui/stacks'
import { useControllableState } from '@tamagui/use-controllable-state'
import { GetProps, composeEventHandlers, getVariableValue, styled } from '@tamagui/web'
import * as React from 'react'

/* -------------------------------------------------------------------------------------------------
 * Toggle
 * -----------------------------------------------------------------------------------------------*/

const NAME = 'Toggle'

type TamaguiButtonElement = HTMLButtonElement

type ToggleElement = TamaguiButtonElement

const ToggleFrame = styled(ThemeableStack, {
  name: NAME,
  backgroundColor: '$background',
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
  borderColor: '$borderColor',
  padding: '$2',
  borderWidth: '$0.25',
  hoverStyle: {
    backgroundColor: '$backgroundHover',
  },
  focusStyle: {
    outlineWidth: '$1',
    outlineStyle: 'solid',
    outlineOffset:`-2px`
  },
  variants: {
    orientation: {
      horizontal: {
        flexDirection: 'row',
        spaceDirection: 'horizontal',
      },
      vertical: {
        flexDirection: 'column',
        spaceDirection: 'vertical',
      },
    },
    size: {
      '...size': (value) => {
        const size = getVariableValue(getSize(value)) * 0.65
        return {
          width: size,
          height: size,
        }
      },
    },
  } as const,
})

type ToggleProps = GetProps<typeof ToggleFrame> & {
  defaultValue?: string
  disabled?: boolean
  pressed?: boolean
  defaultPressed?: boolean
  onPressedChange?(pressed: boolean): void
}

const Toggle = ToggleFrame.extractable(
  React.forwardRef<ToggleElement, ToggleProps>((props, forwardedRef) => {
    const {
      pressed: pressedProp,
      defaultPressed = false,
      onPressedChange,
      ...buttonProps
    } = props

    const [pressed = false, setPressed] = useControllableState({
      prop: pressedProp,
      onChange: onPressedChange,
      defaultProp: defaultPressed,
    })

    return (
      <ToggleFrame
        theme={pressed?"active":null}
        aria-pressed={pressed}
        data-state={pressed ? 'on' : 'off'}
        data-disabled={props.disabled ? '' : undefined}
        {...buttonProps}
        ref={forwardedRef}
        onPress={composeEventHandlers(props.onPress, () => {
          if (!props.disabled) {
            setPressed(!pressed)
          }
        })}
        onKeyDown={composeEventHandlers(
          (props as React.HTMLProps<HTMLButtonElement>).onKeyDown,
          (event) => {
            if ([' ', 'Enter'].includes(event.key)) {
              if (!props.disabled) {
                setPressed(!pressed)
              }
            }
          }
        )}
      />
    )
  })
)
Toggle.displayName = NAME

/* ---------------------------------------------------------------------------------------------- */

export { Toggle }
export type { ToggleProps }

