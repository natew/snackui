import { TamaguiElement } from '@tamagui/core'
import { createContextScope } from '@tamagui/create-context'
import React from 'react'

import { SHEET_NAME } from './constants'
import { PositionChangeHandler, ScrollBridge, SheetProps } from './types'

type SheetContextValue = Required<
  Pick<SheetProps, 'open' | 'position' | 'snapPoints' | 'dismissOnOverlayPress'>
> & {
  hidden: boolean
  setPosition: PositionChangeHandler
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  contentRef: React.RefObject<TamaguiElement>
  dismissOnSnapToBottom: boolean
  scrollBridge: ScrollBridge
  frameSize: number
  modal: boolean
  handleAnimationViewLayout: ((event: LayoutChangeEvent) => void) | undefined
}

export const [createSheetContext, createSheetScope] = createContextScope(SHEET_NAME)

export const [SheetProvider, useSheetContext] = createSheetContext<SheetContextValue>(
  SHEET_NAME,
  {} as any
)
