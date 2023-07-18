import { TamaguiComponent, getSplitStyles } from '../core/src'

const emptyObj = {} as any
const state = {
  hover: false,
  press: false,
  pressIn: false,
  focus: false,
  unmounted: true,
  mediaState: undefined,
  isAnimated: false,
}

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
    { theme: emptyObj, name: '' },
    state,
    emptyObj,
    emptyObj,
    options.tag,
    true
  )
}
