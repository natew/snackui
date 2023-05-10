import PropTypes from 'prop-types'
import React, { memo } from 'react'
import {
  Defs,
  Ellipse,
  G,
  Line,
  LinearGradient,
  Path,
  Polygon,
  Polyline,
  RadialGradient,
  Rect,
  Stop,
  Svg,
  Symbol,
  Use,
  Circle as _Circle,
  Text as _Text,
} from 'react-native-svg'

import { IconProps } from '../IconProps'
import { themed } from '../themed'

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={`${color}`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <Path d="M2 20h.01" fill="none" stroke={`${color}`} />
      <Path d="M7 20v-4" fill="none" stroke={`${color}`} />
      <Path d="M12 20v-8" fill="none" stroke={`${color}`} />
      <Path d="M17 20V8" fill="none" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'SignalHigh'

export const SignalHigh = memo<IconProps>(themed(Icon))
