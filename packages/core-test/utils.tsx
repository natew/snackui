import { SplitStyleProps, TamaguiComponent, getSplitStyles } from '../core/src'
import { defaultComponentState } from '../web/src/defaultComponentState'

const emptyObj = {} as any

const styleProps = {
  mediaState: undefined,
  isAnimated: false,
  resolveValues: 'auto',
} satisfies SplitStyleProps

export function simplifiedGetSplitStyles(
  component: TamaguiComponent,
  props: Record<string, any>,
  options: {
    tag?: string
    mediaState?: Record<string, any>
  } = {}
) {
  return getSplitStyles(
    props,
    component.staticConfig,
    emptyObj,
    '',
    defaultComponentState,
    styleProps,
    emptyObj,
    emptyObj,
    options.tag,
    true
  )
}
