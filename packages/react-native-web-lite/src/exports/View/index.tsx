/**
 * Copyright (c) Nicolas Gallagher.
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import * as React from 'react'
import { StyleSheet } from 'react-native-web-internal'

import * as forwardedProps from '../../modules/forwardedProps/index.js'
import pick from '../../modules/pick/index.js'
import useElementLayout from '../../modules/useElementLayout/index.js'
import { getLocaleDirection, useLocaleContext } from '../../modules/useLocale/index.js'
import { useMergeRefs } from '../../modules/useMergeRefs/index.js'
import usePlatformMethods from '../../modules/usePlatformMethods/index.js'
import useResponderEvents from '../../modules/useResponderEvents/index.js'
import type { PlatformMethods } from '../../types.js'
import createElement from '../createElement/index.js'
import TextAncestorContext from '../Text/TextAncestorContext.js'
import type { ViewProps } from './types.js'

const forwardPropsList = Object.assign(
  {},
  forwardedProps.defaultProps,
  forwardedProps.accessibilityProps,
  forwardedProps.clickProps,
  forwardedProps.defaultProps,
  forwardedProps.accessibilityProps,
  forwardedProps.clickProps,
  forwardedProps.focusProps,
  forwardedProps.keyboardProps,
  forwardedProps.mouseProps,
  forwardedProps.touchProps,
  forwardedProps.styleProps,
  {
    href: true,
    lang: true,
    onScroll: true,
    onWheel: true,
    pointerEvents: true,
  }
)

const pickProps = (props) => pick(props, forwardPropsList)

const View = React.forwardRef<HTMLElement & PlatformMethods, ViewProps>((props, forwardedRef) => {
  const {
    hrefAttrs,
    onLayout,
    onMoveShouldSetResponder,
    onMoveShouldSetResponderCapture,
    onResponderEnd,
    onResponderGrant,
    onResponderMove,
    onResponderReject,
    onResponderRelease,
    onResponderStart,
    onResponderTerminate,
    onResponderTerminationRequest,
    onScrollShouldSetResponder,
    onScrollShouldSetResponderCapture,
    onSelectionChangeShouldSetResponder,
    onSelectionChangeShouldSetResponderCapture,
    onStartShouldSetResponder,
    onStartShouldSetResponderCapture,
    ...rest
  } = props

  if (process.env.NODE_ENV !== 'production') {
    React.Children.toArray(props.children).forEach((item) => {
      if (typeof item === 'string') {
        // eslint-disable-next-line no-console
        console.error(`Unexpected text node: ${item}. A text node cannot be a child of a <View>.`)
      }
    })
  }

  const hasTextAncestor = React.useContext(TextAncestorContext)
  const hostRef = React.useRef(null)
  const { direction: contextDirection } = useLocaleContext()

  useElementLayout(hostRef, onLayout)
  useResponderEvents(hostRef, {
    onMoveShouldSetResponder,
    onMoveShouldSetResponderCapture,
    onResponderEnd,
    onResponderGrant,
    onResponderMove,
    onResponderReject,
    onResponderRelease,
    onResponderStart,
    onResponderTerminate,
    onResponderTerminationRequest,
    onScrollShouldSetResponder,
    onScrollShouldSetResponderCapture,
    onSelectionChangeShouldSetResponder,
    onSelectionChangeShouldSetResponderCapture,
    onStartShouldSetResponder,
    onStartShouldSetResponderCapture,
  })

  let component = 'div'

  const langDirection = props.lang != null ? getLocaleDirection(props.lang) : null
  const componentDirection = props.dir || langDirection
  const writingDirection = componentDirection || contextDirection

  const supportedProps = pickProps(rest) as any
  supportedProps.dir = componentDirection
  supportedProps.style = [styles.view$raw, hasTextAncestor && styles.inline, props.style]
  if (props.href != null) {
    component = 'a'
    if (hrefAttrs != null) {
      const { download, rel, target } = hrefAttrs
      if (download != null) {
        supportedProps.download = download
      }
      if (rel != null) {
        supportedProps.rel = rel
      }
      if (typeof target === 'string') {
        supportedProps.target = target.charAt(0) !== '_' ? '_' + target : target
      }
    }
  }

  const platformMethodsRef = usePlatformMethods(supportedProps)
  const setRef = useMergeRefs(hostRef, platformMethodsRef, forwardedRef)

  supportedProps.ref = setRef

  return createElement(component, supportedProps, { writingDirection })
})

View.displayName = 'View'

const styles = StyleSheet.create({
  view$raw: {
    alignItems: 'stretch',
    boxSizing: 'border-box',
    display: 'flex',
    flexBasis: 'auto',
    flexDirection: 'column',
    flexShrink: 0,
  },
  inline: {
    display: 'inline-flex',
  },
})

export { ViewProps }

export default View
