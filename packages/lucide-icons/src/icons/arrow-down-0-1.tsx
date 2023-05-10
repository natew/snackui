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
      <Path d="m3 16 4 4 4-4" fill="none" stroke={`${color}`} />
      <Path d="M7 20V4" fill="none" stroke={`${color}`} />
      <Rect
        x="15"
        y="4"
        width="4"
        height="6"
        ry="2"
        fill="none"
        stroke={`${color}`}
      />
      <Path d="M17 20v-6h-2" fill="none" stroke={`${color}`} />
      <Path d="M15 20h4" fill="none" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'ArrowDown01'

export const ArrowDown01 = memo<IconProps>(themed(Icon))
