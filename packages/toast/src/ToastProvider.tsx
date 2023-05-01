import { createCollection } from '@tamagui/collection'
import { NativeValue, TamaguiElement } from '@tamagui/core'
import type { Scope } from '@tamagui/create-context'
import { createContextScope } from '@tamagui/create-context'
import * as React from 'react'

import { ToastImperativeProvider } from './ToastImperative'
import { BurntToastOptions } from './types'

/* -------------------------------------------------------------------------------------------------
 * ToastProvider
 * -----------------------------------------------------------------------------------------------*/

const PROVIDER_NAME = 'ToastProvider'

const [Collection, useCollection, createCollectionScope] =
  createCollection<TamaguiElement>('Toast')

export type SwipeDirection = 'vertical' | 'up' | 'down' | 'horizontal' | 'left' | 'right'
type ToastProviderContextValue = {
  id: string
  label: string
  duration: number
  swipeDirection: SwipeDirection
  swipeThreshold: number
  toastCount: number
  viewports: Record<string, TamaguiElement | null>
  onViewportChange(name: string, viewport: TamaguiElement): void
  onToastAdd(): void
  onToastRemove(): void
  isFocusedToastEscapeKeyDownRef: React.MutableRefObject<boolean>
  isClosePausedRef: React.MutableRefObject<boolean>
}

type ScopedProps<P> = P & { __scopeToast?: Scope }
const [createToastContext, createToastScope] = createContextScope('Toast', [
  createCollectionScope,
])
const [ToastProviderProvider, useToastProviderContext] =
  createToastContext<ToastProviderContextValue>(PROVIDER_NAME)

interface ToastProviderProps {
  children?: React.ReactNode
  /**
   * An author-localized label for each toast. Used to help screen reader users
   * associate the interruption with a toast.
   * @defaultValue 'Notification'
   */
  label?: string
  /**
   * Time in milliseconds that each toast should remain visible for.
   * @defaultValue 5000
   */
  duration?: number
  /**
   * Direction of pointer swipe that should close the toast.
   * @defaultValue 'right'
   */
  swipeDirection?: SwipeDirection
  /**
   * Distance in pixels that the swipe must pass before a close is triggered.
   * @defaultValue 50
   */
  swipeThreshold?: number
  /**
   * @defaultValue unique generated identifier
   */
  id?: string
  /**
   * Will show a native toast if is true or is set to the current platform. On iOS, it wraps `SPIndicator` and `SPAlert`. On Android, it wraps `ToastAndroid`. On web, it wraps Notification API. Mobile's native features are handled by `burnt`.
   * Only works with the imperative `useToast` hook.
   */
  native?: NativeValue
  /**
   * Options for the burnt package if you're using native toasts on mobile
   */
  burntOptions?: Omit<BurntToastOptions, 'title' | 'message' | 'duration'>
  /**
   * Options for the notification API if you're using native toasts on web
   */
  notificationOptions?: NotificationOptions
}

const ToastProvider: React.FC<ToastProviderProps> = (
  props: ScopedProps<ToastProviderProps>
) => {
  const {
    __scopeToast,
    id: providedId,
    burntOptions,
    native,
    notificationOptions,
    label = 'Notification',
    duration = 5000,
    swipeDirection = 'right',
    swipeThreshold = 50,
    children,
  } = props
  const id = providedId ?? React.useId()
  const [viewports, setViewports] = React.useState<
    ToastProviderContextValue['viewports']
  >({})
  const [toastCount, setToastCount] = React.useState(0)
  const isFocusedToastEscapeKeyDownRef = React.useRef(false)
  const isClosePausedRef = React.useRef(false)

  const handleViewportChange = React.useCallback(
    (name: string, viewport: TamaguiElement | null) => {
      setViewports((prev) => ({ ...prev, [name]: viewport }))
    },
    []
  )

  // memo context to avoid expensive re-renders
  const options = React.useMemo(() => {
    return {
      duration,
      burntOptions,
      native,
      notificationOptions,
    }
    // nested simple object so JSON.stringify
  }, [JSON.stringify([duration, burntOptions, native, notificationOptions])])

  return (
    <Collection.Provider scope={__scopeToast}>
      <ToastProviderProvider
        scope={__scopeToast}
        id={id}
        label={label}
        duration={duration}
        swipeDirection={swipeDirection}
        swipeThreshold={swipeThreshold}
        toastCount={toastCount}
        viewports={viewports}
        onViewportChange={handleViewportChange}
        onToastAdd={React.useCallback(() => {
          setToastCount((prevCount) => prevCount + 1)
        }, [])}
        onToastRemove={React.useCallback(() => {
          setToastCount((prevCount) => prevCount - 1)
        }, [])}
        isFocusedToastEscapeKeyDownRef={isFocusedToastEscapeKeyDownRef}
        isClosePausedRef={isClosePausedRef}
      >
        <ToastImperativeProvider options={options}>{children}</ToastImperativeProvider>
      </ToastProviderProvider>
    </Collection.Provider>
  )
}

ToastProvider.propTypes = {
  label(props) {
    if (props.label && typeof props.label === 'string' && !props.label.trim()) {
      const error = `Invalid prop \`label\` supplied to \`${PROVIDER_NAME}\`. Expected non-empty \`string\`.`
      return new Error(error)
    }
    return null
  },
}

ToastProvider.displayName = PROVIDER_NAME

export {
  Collection,
  ToastProvider,
  createToastContext,
  createToastScope,
  useCollection,
  useToastProviderContext,
}
export type { ScopedProps, SwipeDirection, ToastProviderProps }
