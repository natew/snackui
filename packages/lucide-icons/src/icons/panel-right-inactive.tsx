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
        width="18"
        height="18"
        x="3"
        y="3"
        rx="2"
        fill="none"
        stroke={`${color}`}
      />
      <Path d="M15 14v1" fill="none" stroke={`${color}`} />
      <Path d="M15 19v2" fill="none" stroke={`${color}`} />
      <Path d="M15 3v2" fill="none" stroke={`${color}`} />
      <Path d="M15 9v1" fill="none" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'PanelRightInactive'

export const PanelRightInactive = memo<IconProps>(themed(Icon))
