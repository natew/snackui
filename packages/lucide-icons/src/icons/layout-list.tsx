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
        y="14"
        rx="1"
        fill="none"
        stroke={`${color}`}
      />
      <Rect
        width="7"
        height="7"
        x="3"
        y="3"
        rx="1"
        fill="none"
        stroke={`${color}`}
      />
      <Line x1="14" x2="21" y1="4" y2="4" fill="none" stroke={`${color}`} />
      <Line x1="14" x2="21" y1="9" y2="9" fill="none" stroke={`${color}`} />
      <Line x1="14" x2="21" y1="15" y2="15" fill="none" stroke={`${color}`} />
      <Line x1="14" x2="21" y1="20" y2="20" fill="none" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'LayoutList'

export const LayoutList = memo<IconProps>(themed(Icon))
