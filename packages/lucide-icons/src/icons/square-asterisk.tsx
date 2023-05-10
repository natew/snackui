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
      <Path d="M12 8v8" fill="none" stroke={`${color}`} />
      <Path d="m8.5 14 7-4" fill="none" stroke={`${color}`} />
      <Path d="m8.5 10 7 4" fill="none" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'SquareAsterisk'

export const SquareAsterisk = memo<IconProps>(themed(Icon))
