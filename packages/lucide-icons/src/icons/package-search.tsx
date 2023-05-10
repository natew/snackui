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
      <Path
        d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"
        stroke={`${color}`}
      />
      <Path d="M16.5 9.4 7.55 4.24" stroke={`${color}`} />
      <Polyline points="3.29 7 12 12 20.71 7" stroke={`${color}`} />
      <Line x1="12" x2="12" y1="22" y2="12" stroke={`${color}`} />
      <_Circle cx="18.5" cy="15.5" r="2.5" stroke={`${color}`} />
      <Path d="M20.27 17.27 22 19" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'PackageSearch'

export const PackageSearch = memo<IconProps>(themed(Icon))
