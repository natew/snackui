import { useComposedRefs } from '@tamagui/compose-refs'
import {
  GetProps,
  ReactComponentWithRef,
  isWeb,
  styled,
  themeable,
  useId,
  useIsomorphicLayoutEffect,
} from '@tamagui/core'
import { createContext } from '@tamagui/create-context'
import { focusFocusable } from '@tamagui/focusable'
import { getButtonSized } from '@tamagui/get-button-sized'
import { getFontSized } from '@tamagui/get-font-sized'
import { SizableText } from '@tamagui/text'
import * as React from 'react'
import { View } from 'react-native'

const NAME = 'Label'

type LabelContextValue = {
  id?: string
  controlRef: React.MutableRefObject<HTMLElement | null>
}

const [LabelProvider, useLabelContextImpl] = createContext<LabelContextValue>(NAME, {
  id: undefined,
  controlRef: { current: null },
})

export const LabelFrame = styled(SizableText, {
  name: 'Label',
  tag: 'label',
  size: '$true',
  backgroundColor: 'transparent',
  display: 'flex',
  alignItems: 'center',
  userSelect: 'none',
  cursor: 'default',
  pressStyle: {
    color: '$colorPress',
  },
  variants: {
    size: {
      '...size': (val, extras) => {
        const buttonStyle = getButtonSized(val, extras)
        return {
          ...getFontSized(val, extras),
          height: buttonStyle.height,
          lineHeight: buttonStyle.height,
        }
      },
    },
  } as const,
})

export type LabelProps = GetProps<typeof LabelFrame> & {
  htmlFor?: string
}

const LabelComponent = React.forwardRef<typeof LabelFrame, LabelProps>(
  (props, forwardedRef) => {
    const { htmlFor, id: idProp, ...labelProps } = props
    const controlRef = React.useRef<HTMLElement | null>(null)
    const ref = React.useRef<any>(null)
    const composedRefs = useComposedRefs(forwardedRef, ref)
    const backupId = useId()
    const id = idProp ?? backupId

    if (isWeb) {
      React.useEffect(() => {
        if (htmlFor) {
          const element = document.getElementById(htmlFor)
          const label = ref.current
          if (label && element) {
            const getAriaLabel = () => element.getAttribute('aria-labelledby')
            const ariaLabelledBy = [id, getAriaLabel()].filter(Boolean).join(' ')
            element.setAttribute('aria-labelledby', ariaLabelledBy)
            controlRef.current = element
            return () => {
              /**
               * We get the latest attribute value because at the time that this cleanup fires,
               * the values from the closure may have changed.
               */
              if (!id) return
              const ariaLabelledBy = getAriaLabel()?.replace(id, '')
              if (ariaLabelledBy === '') {
                element.removeAttribute('aria-labelledby')
              } else if (ariaLabelledBy) {
                element.setAttribute('aria-labelledby', ariaLabelledBy)
              }
            }
          }
        }
      }, [id, htmlFor])
    }

    return (
      <LabelProvider id={id} controlRef={controlRef}>
        <LabelFrame
          role="label"
          id={id}
          // @ts-ignore
          htmlFor={htmlFor}
          {...labelProps}
          ref={composedRefs as any}
          onMouseDown={(event) => {
            props.onMouseDown?.(event)
            // prevent text selection when double clicking label
            if (!event.defaultPrevented && event.detail > 1) {
              event.preventDefault()
            }
          }}
          onPress={(event) => {
            props.onPress?.(event)

            if (isWeb) {
              if (htmlFor || !controlRef.current || event.defaultPrevented) return
              const isClickingControl = controlRef.current.contains(
                event.target as any as Node
              )
              // Ensure event was generated by a user action
              // https://developer.mozilla.org/en-US/docs/Web/API/Event/isTrusted
              const isUserClick = event.isTrusted === true
              /**
               * When a label is wrapped around the control it labels, we trigger the appropriate events
               * on the control when the label is clicked. We do nothing if the user is already clicking the
               * control inside the label.
               */
              if (!isClickingControl && isUserClick) {
                controlRef.current.click()
                controlRef.current.focus()
              }
            } else {
              if (props.htmlFor) {
                focusFocusable(props.htmlFor)
              }
            }
          }}
        />
      </LabelProvider>
    )
  }
)

LabelComponent.displayName = NAME

export const Label: ReactComponentWithRef<LabelProps, HTMLButtonElement | View> =
  LabelFrame.extractable(themeable(LabelComponent as any) as any, {
    neverFlatten: true,
  })

export const useLabelContext = (element?: HTMLElement | null) => {
  const context = useLabelContextImpl('LabelConsumer')
  const { controlRef } = context

  React.useEffect(() => {
    if (element) controlRef.current = element
  }, [element, controlRef])

  return context.id
}

const Root = Label
