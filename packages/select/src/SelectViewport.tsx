import { FloatingFocusManager } from '@floating-ui/react'
import { AnimatePresence } from '@tamagui/animate-presence'
import {
  TamaguiElement,
  composeRefs,
  isWeb,
  useIsomorphicLayoutEffect,
} from '@tamagui/core'
import { styled } from '@tamagui/core'
import { PortalItem } from '@tamagui/portal'
import { ThemeableStack } from '@tamagui/stacks'
import * as React from 'react'

import { VIEWPORT_NAME } from './constants'
import { ForwardSelectContext, useSelectContext } from './context'
import { ScopedProps, SelectViewportProps } from './types'
import { useSelectBreakpointActive } from './useSelectBreakpointActive'

/* -------------------------------------------------------------------------------------------------
 * SelectViewport
 * -----------------------------------------------------------------------------------------------*/

export const SelectViewportFrame = styled(ThemeableStack, {
  name: VIEWPORT_NAME,

  variants: {
    unstyled: {
      false: {
        size: '$2',
        backgroundColor: '$background',
        elevate: true,
        bordered: true,
        userSelect: 'none',
        outlineWidth: 0,
      },
    },

    size: {
      '...size': (val, { tokens }) => {
        return {
          borderRadius: tokens.radius[val] ?? val,
        }
      },
    },
  } as const,

  defaultVariants: {
    unstyled: false,
  },
})

export const SelectViewport = SelectViewportFrame.styleable<SelectViewportProps>(
  function SelectViewport(props: ScopedProps<SelectViewportProps>, forwardedRef) {
    const { __scopeSelect, children, disableScroll, ...viewportProps } = props
    const context = useSelectContext(VIEWPORT_NAME, __scopeSelect)
    const breakpointActive = useSelectBreakpointActive(context.sheetBreakpoint)

    useIsomorphicLayoutEffect(() => {
      if (context.update) {
        context.update()
      }
    }, [breakpointActive])

    const composedRefs = composeRefs(
      forwardedRef,
      context.floatingContext?.refs.setFloating
    )

    if (context.shouldRenderWebNative) {
      return <>{children}</>
    }

    if (breakpointActive || !isWeb) {
      return (
        <PortalItem hostName={`${context.scopeKey}SheetContents`}>
          <ForwardSelectContext context={context}>{children}</ForwardSelectContext>
        </PortalItem>
      )
    }

    const {
      style: { scrollbarWidth, listStyleType, overflow, ...restStyle },
      ...floatingProps
    } = context.interactions!.getFloatingProps()

    return (
      <>
        {!disableScroll && !props.unstyled && (
          <style
            dangerouslySetInnerHTML={{
              __html: selectViewportCSS,
            }}
          />
        )}
        <FloatingFocusManager context={context.floatingContext!}>
          <AnimatePresence>
            {context.open ? (
              <SelectViewportFrame
                key="select-viewport"
                size={context.size}
                // @ts-ignore
                role="presentation"
                {...viewportProps}
                ref={composedRefs}
                {...floatingProps}
                {...restStyle}
                {...(!props.unstyled && {
                  overflow: disableScroll ? undefined : overflow ?? 'scroll',
                })}
              >
                {children}
              </SelectViewportFrame>
            ) : null}
          </AnimatePresence>
        </FloatingFocusManager>

        {/* keep in dom to allow for portal to the trigger... very hacky! we should fix */}
        {!context.open && <div style={{ display: 'none' }}>{props.children}</div>}
      </>
    )
  }
)

const selectViewportCSS = `
.is_SelectViewport {
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
}

.is_SelectViewport::-webkit-scrollbar{
  display:none
}
`
