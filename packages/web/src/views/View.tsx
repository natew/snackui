import { validStyles } from '@tamagui/helpers'

import { stackDefaultStyles } from '../constants/constants'
import { createComponent } from '../createComponent'
import type { StackProps, StackPropsBase, TamaguiElement } from '../types'

export type View = TamaguiElement

export const View = createComponent<StackProps, View, StackPropsBase>({
  componentName: 'View',
  acceptsClassName: true,
  defaultProps: stackDefaultStyles,
  validStyles,
})
