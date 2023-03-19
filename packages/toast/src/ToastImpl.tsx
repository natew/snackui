import { useIsPresent } from '@tamagui/animate-presence'
import { useComposedRefs } from '@tamagui/compose-refs'
import {
  GetProps,
  TamaguiElement,
  Theme,
  composeEventHandlers,
  getAnimationDriver,
  isWeb,
  styled,
  useEvent,
  useThemeName,
} from '@tamagui/core'
import { Dismissable, DismissableProps } from '@tamagui/dismissable'
import { PortalItem } from '@tamagui/portal'
import { ThemeableStack } from '@tamagui/stacks'
import * as React from 'react'
import { Animated, GestureResponderEvent, PanResponder } from 'react-native'

import { TOAST_NAME } from './constants'
import { ToastAnnounce } from './ToastAnnounce'
import {
  Collection,
  ScopedProps,
  SwipeDirection,
  createToastContext,
  useToastProviderContext,
} from './ToastProvider'
import { VIEWPORT_PAUSE, VIEWPORT_RESUME } from './ToastViewport'

const ToastImplFrame = styled(ThemeableStack, {
  name: 'ToastImpl',
  variants: {
    backgrounded: {
      true: {
        backgroundColor: '$color6',
      },
    },
    unstyled: {
      false: {
        borderRadius: '$10',
        paddingHorizontal: '$5',
        paddingVertical: '$2',
        marginHorizontal: 'auto',
        marginVertical: '$1',
      },
    },
  },
  defaultVariants: {
    backgrounded: true,
    unstyled: false,
  },
})
interface ToastProps extends Omit<ToastImplProps, keyof ToastImplPrivateProps> {
  /**
   * The controlled open state of the dialog. Must be used in conjunction with `onOpenChange`.
   */
  open?: boolean
  /**
   * The open state of the dialog when it is initially rendered. Use when you do not need to control its open state.
   */
  defaultOpen?: boolean
  /**
   * Event handler called when the open state of the dialog changes.
   */
  onOpenChange?(open: boolean): void
  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling animation with React animation libraries.
   */
  forceMount?: true
}

type SwipeEvent = GestureResponderEvent

const [ToastInteractiveProvider, useToastInteractiveContext] = createToastContext(
  TOAST_NAME,
  {
    onClose() {},
  }
)

type ToastImplPrivateProps = { open: boolean; onClose(): void }
type ToastImplFrameProps = GetProps<typeof ToastImplFrame>
type ToastImplProps = ToastImplPrivateProps &
  ToastImplFrameProps & {
    /**
     * Control the sensitivity of the toast for accessibility purposes.
     * For toasts that are the result of a user action, choose foreground. Toasts generated from background tasks should use background.
     */
    type?: 'foreground' | 'background'
    /**
     * Time in milliseconds that toast should remain visible for. Overrides value given to `ToastProvider`.
     */
    duration?: number
    /**
     * Event handler called when the escape key is down. It can be prevented by calling `event.preventDefault`.
     */
    onEscapeKeyDown?: DismissableProps['onEscapeKeyDown']
    /**
     * Event handler called when the dismiss timer is paused.
     * On web, this occurs when the pointer is moved over the viewport, the viewport is focused or when the window is blurred.
     * On mobile, this occurs when the toast is touched.
     */
    onPause?(): void
    /**
     * Event handler called when the dismiss timer is resumed.
     * On web, this occurs when the pointer is moved away from the viewport, the viewport is blurred or when the window is focused.
     * On mobile, this occurs when the toast is released.
     */
    onResume?(): void
    /**
     * Event handler called when starting a swipe interaction. It can be prevented by calling `event.preventDefault`.
     */
    onSwipeStart?(event: SwipeEvent): void
    /**
     * Event handler called during a swipe interaction. It can be prevented by calling `event.preventDefault`.
     */
    onSwipeMove?(event: SwipeEvent): void
    /**
     * Event handler called at the cancellation of a swipe interaction. It can be prevented by calling `event.preventDefault`.
     */
    onSwipeCancel?(event: SwipeEvent): void
    /**
     * Event handler called at the end of a swipe interaction. It can be prevented by calling `event.preventDefault`.
     */
    onSwipeEnd?(event: SwipeEvent): void
    /**
     * The viewport's name to send the toast to. Used when using multiple viewports and want to forward toasts to different ones.
     *
     * @default "default"
     */
    viewportName?: string
  }

const ToastImpl = React.forwardRef<TamaguiElement, ToastImplProps>(
  (props: ScopedProps<ToastImplProps>, forwardedRef) => {
    const {
      __scopeToast,
      type = 'foreground',
      duration: durationProp,
      open,
      onClose,
      onEscapeKeyDown,
      onPause,
      onResume,
      onSwipeStart,
      onSwipeMove,
      onSwipeCancel,
      onSwipeEnd,
      viewportName,
      ...toastProps
    } = props
    const isPresent = useIsPresent()
    const context = useToastProviderContext(TOAST_NAME, __scopeToast)
    const [node, setNode] = React.useState<TamaguiElement | null>(null)
    const composedRefs = useComposedRefs(forwardedRef, (node) => setNode(node))
    const duration = durationProp || context.duration
    const closeTimerStartTimeRef = React.useRef(0)
    const closeTimerRemainingTimeRef = React.useRef(duration)
    const closeTimerRef = React.useRef(0)
    const { onToastAdd, onToastRemove } = context
    const handleClose = useEvent(() => {
      if (!isPresent) {
        // already removed from the react tree
        return
      }
      // focus viewport if focus is within toast to read the remaining toast
      // count to SR users and ensure focus isn't lost
      if (isWeb) {
        const isFocusInToast = (node as HTMLDivElement)?.contains(document.activeElement)
        if (isFocusInToast) context.viewport?.focus()
      }
      onClose()
    })

    const startTimer = React.useCallback(
      (duration: number) => {
        if (!duration || duration === Infinity) return
        clearTimeout(closeTimerRef.current)
        closeTimerStartTimeRef.current = new Date().getTime()
        closeTimerRef.current = setTimeout(handleClose, duration) as unknown as number
      },
      [handleClose]
    )
    const handleResume = React.useCallback(() => {
      startTimer(closeTimerRemainingTimeRef.current)
      onResume?.()
    }, [onResume, startTimer])
    const handlePause = React.useCallback(() => {
      const elapsedTime = new Date().getTime() - closeTimerStartTimeRef.current
      closeTimerRemainingTimeRef.current =
        closeTimerRemainingTimeRef.current - elapsedTime
      window.clearTimeout(closeTimerRef.current)
      onPause?.()
    }, [onPause])

    React.useEffect(() => {
      if (!isWeb) return
      const viewport = context.viewport as HTMLElement
      if (viewport) {
        viewport.addEventListener(VIEWPORT_PAUSE, handlePause)
        viewport.addEventListener(VIEWPORT_RESUME, handleResume)
        return () => {
          viewport.removeEventListener(VIEWPORT_PAUSE, handlePause)
          viewport.removeEventListener(VIEWPORT_RESUME, handleResume)
        }
      }
    }, [context.viewport, duration, onPause, onResume, startTimer])

    // start timer when toast opens or duration changes.
    // we include `open` in deps because closed !== unmounted when animating
    // so it could reopen before being completely unmounted
    React.useEffect(() => {
      if (open && !context.isClosePausedRef.current) {
        startTimer(duration)
      }
    }, [open, duration, context.isClosePausedRef, startTimer])

    React.useEffect(() => {
      onToastAdd()
      return () => onToastRemove()
    }, [onToastAdd, onToastRemove])

    const announceTextContent = React.useMemo(() => {
      if (!isWeb) return null
      return node ? getAnnounceTextContent(node as HTMLDivElement) : null
    }, [node])

    const isHorizontalSwipe = ['left', 'right', 'horizontal'].includes(
      context.swipeDirection
    )

    const driver = getAnimationDriver()
    if (!driver) {
      throw new Error('Must set animations in tamagui.config.ts')
    }

    const { useAnimatedNumber, useAnimatedNumberStyle } = driver

    const animatedNumber = useAnimatedNumber(0)

    // temp until reanimated useAnimatedNumber fix
    const AnimatedView = (driver['NumberView'] ?? driver.View) as typeof Animated.View

    const animatedStyles = useAnimatedNumberStyle(animatedNumber, (val) => {
      return {
        transform: [isHorizontalSwipe ? { translateX: val } : { translateY: val }],
      }
    })

    const panResponder = React.useMemo(() => {
      return PanResponder.create({
        onMoveShouldSetPanResponder: (e) => {
          onSwipeStart?.(e)
          return true
        },
        onPanResponderGrant: (e) => {
          if (!isWeb) {
            handlePause?.()
          }
        },
        onPanResponderMove: (e, { dy, dx }) => {
          let y = 0
          let x = 0
          if (context.swipeDirection === 'horizontal') x = dx
          else if (context.swipeDirection === 'left') x = Math.min(0, dx)
          else if (context.swipeDirection === 'right') x = Math.max(0, dx)
          else if (context.swipeDirection === 'vertical') y = dy
          else if (context.swipeDirection === 'up') y = Math.min(0, dy)
          else if (context.swipeDirection === 'down') y = Math.max(0, dy)

          onSwipeMove?.(e)

          const delta = { x, y }
          animatedNumber.setValue(isHorizontalSwipe ? x : y, { type: 'direct' })
          if (isDeltaInDirection(delta, context.swipeDirection, context.swipeThreshold)) {
            onSwipeEnd?.(e)
          }
        },
        onPanResponderEnd: (e, { dx, dy }) => {
          if (
            !isDeltaInDirection(
              { x: dx, y: dy },
              context.swipeDirection,
              context.swipeThreshold
            )
          ) {
            if (!isWeb) {
              handleResume?.()
            }
            onSwipeCancel?.(e)
            animatedNumber.setValue(0, { type: 'spring' })
          }
        },
      })
    }, [handlePause, handleResume])

    // need to get the theme name from context and apply it again since portals don't retain the theme
    const themeName = useThemeName()

    return (
      <>
        {announceTextContent && (
          <ToastAnnounce
            __scopeToast={__scopeToast}
            // Toasts are always role=status to avoid stuttering issues with role=alert in SRs.
            role="status"
            aria-live={type === 'foreground' ? 'assertive' : 'polite'}
            aria-atomic
          >
            {announceTextContent}
          </ToastAnnounce>
        )}

        <PortalItem hostName={viewportName ?? 'default'}>
          <ToastInteractiveProvider
            key={props.id}
            scope={__scopeToast}
            onClose={() => {
              console.log('hellooow')
              handleClose()
            }}
          >
            <Dismissable
              // asChild
              onEscapeKeyDown={composeEventHandlers(onEscapeKeyDown, () => {
                if (!context.isFocusedToastEscapeKeyDownRef.current) {
                  handleClose()
                }
                context.isFocusedToastEscapeKeyDownRef.current = false
              })}
            >
              <Theme forceClassName name={themeName}>
                <AnimatedView
                  {...panResponder?.panHandlers}
                  style={[{ margin: 'auto' }, animatedStyles]}
                >
                  <Collection.ItemSlot scope={__scopeToast}>
                    <ToastImplFrame
                      // Ensure toasts are announced as status list or status when focused
                      role="status"
                      aria-live="off"
                      aria-atomic
                      tabIndex={0}
                      data-state={open ? 'open' : 'closed'}
                      data-swipe-direction={context.swipeDirection}
                      pointerEvents="auto"
                      // touchAction="none"
                      userSelect="none"
                      {...toastProps}
                      ref={composedRefs}
                      {...(isWeb && {
                        onKeyDown: composeEventHandlers(
                          (props as any).onKeyDown,
                          (event: KeyboardEvent) => {
                            if (event.key !== 'Escape') return
                            onEscapeKeyDown?.(event)
                            onEscapeKeyDown?.(event)
                            if (!event.defaultPrevented) {
                              context.isFocusedToastEscapeKeyDownRef.current = true
                              handleClose()
                            }
                          }
                        ),
                      })}
                    />
                  </Collection.ItemSlot>
                </AnimatedView>
              </Theme>
            </Dismissable>
          </ToastInteractiveProvider>
        </PortalItem>
      </>
    )
  }
)

ToastImpl.propTypes = {
  type(props) {
    if (props.type && !['foreground', 'background'].includes(props.type)) {
      const error = `Invalid prop \`type\` supplied to \`${TOAST_NAME}\`. Expected \`foreground | background\`.`
      return new Error(error)
    }
    return null
  },
}

/* ---------------------------------------------------------------------------------------------- */

const isDeltaInDirection = (
  delta: { x: number; y: number },
  direction: SwipeDirection,
  threshold = 0
) => {
  const deltaX = Math.abs(delta.x)
  const deltaY = Math.abs(delta.y)
  const isDeltaX = deltaX > deltaY
  if (direction === 'left' || direction === 'right' || direction === 'horizontal') {
    return isDeltaX && deltaX > threshold
  } else {
    return !isDeltaX && deltaY > threshold
  }
}

function getAnnounceTextContent(container: HTMLElement) {
  if (!isWeb) return ''
  const textContent: string[] = []
  const childNodes = Array.from(container.childNodes)

  childNodes.forEach((node) => {
    if (node.nodeType === node.TEXT_NODE && node.textContent)
      textContent.push(node.textContent)
    if (isHTMLElement(node)) {
      const isHidden = node.ariaHidden || node.hidden || node.style.display === 'none'
      const isExcluded = node.dataset.toastAnnounceExclude === ''

      if (!isHidden) {
        if (isExcluded) {
          const altText = node.dataset.toastAnnounceAlt
          if (altText) textContent.push(altText)
        } else {
          textContent.push(...getAnnounceTextContent(node))
        }
      }
    }
  })

  // We return a collection of text rather than a single concatenated string.
  // This allows SR VO to naturally pause break between nodes while announcing.
  return textContent
}

function isHTMLElement(node: any): node is HTMLElement {
  return node.nodeType === node.ELEMENT_NODE
}

export { ToastImpl, ToastImplFrame, ToastImplProps, useToastInteractiveContext }
export type { ToastProps }
