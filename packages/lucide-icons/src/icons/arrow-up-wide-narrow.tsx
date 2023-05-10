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
      <Path d="m3 8 4-4 4 4" fill="none" stroke={`${color}`} />
      <Path d="M7 4v16" fill="none" stroke={`${color}`} />
      <Path d="M11 12h10" fill="none" stroke={`${color}`} />
      <Path d="M11 16h7" fill="none" stroke={`${color}`} />
      <Path d="M11 20h4" fill="none" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'ArrowUpWideNarrow'

export const ArrowUpWideNarrow = memo<IconProps>(themed(Icon))
