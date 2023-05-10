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
      <Path d="m12 15 2 2 4-4" fill="none" stroke={`${color}`} />
      <Rect
        width="14"
        height="14"
        x="8"
        y="8"
        rx="2"
        ry="2"
        fill="none"
        stroke={`${color}`}
      />
      <Path
        d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
        fill="none"
        stroke={`${color}`}
      />
    </Svg>
  )
}

Icon.displayName = 'CopyCheck'

export const CopyCheck = memo<IconProps>(themed(Icon))
