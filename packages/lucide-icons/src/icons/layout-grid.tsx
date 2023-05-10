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
      <Rect
        width="7"
        height="7"
        x="3"
        y="3"
        rx="1"
        fill="none"
        stroke={`${color}`}
      />
      <Rect
        width="7"
        height="7"
        x="14"
        y="3"
        rx="1"
        fill="none"
        stroke={`${color}`}
      />
      <Rect
        width="7"
        height="7"
        x="14"
        y="14"
        rx="1"
        fill="none"
        stroke={`${color}`}
      />
      <Rect
        width="7"
        height="7"
        x="3"
        y="14"
        rx="1"
        fill="none"
        stroke={`${color}`}
      />
    </Svg>
  )
}

Icon.displayName = 'LayoutGrid'

export const LayoutGrid = memo<IconProps>(themed(Icon))
