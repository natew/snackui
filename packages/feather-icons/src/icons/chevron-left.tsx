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
  Text,
  Use,
  Circle as _Circle,
} from 'react-native-svg'

import { IconProps } from '../IconProps'
import { themed } from '../themed'

export const ChevronLeft = memo<IconProps>(
  themed((props) => {
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
        <Polyline
          points="15 18 9 12 15 6"
          fill="none"
          stroke={`${color}`}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    )
  })
)
