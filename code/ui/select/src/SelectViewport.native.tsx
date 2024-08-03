import * as React from 'react'
import { AdaptParentContext } from '@tamagui/adapt'
import { Theme, useThemeName } from '@tamagui/core'
import { PortalItem } from '@tamagui/portal'

import { VIEWPORT_NAME } from './constants'
import {
  ForwardSelectContext,
  useSelectContext,
  useSelectItemParentContext,
} from './context'
import type { SelectScopedProps, SelectViewportProps } from './types'

export const SelectViewport = (props: SelectScopedProps<SelectViewportProps>) => {
  const { __scopeSelect, children } = props
  const context = useSelectContext(VIEWPORT_NAME, __scopeSelect)
  const itemParentContext = useSelectItemParentContext(VIEWPORT_NAME, __scopeSelect)
  const themeName = useThemeName()
  const adaptContext = React.useContext(AdaptParentContext)

  // need to forward context...
  return (
    <PortalItem hostName={`${context.scopeKey}SheetContents`}>
      <Theme name={themeName}>
        <ForwardSelectContext
          __scopeSelect={__scopeSelect}
          itemContext={itemParentContext}
          context={context}
        >
          <AdaptParentContext.Provider value={adaptContext}>
            {children}
          </AdaptParentContext.Provider>
        </ForwardSelectContext>
      </Theme>
    </PortalItem>
  )
}

SelectViewport.displayName = VIEWPORT_NAME
