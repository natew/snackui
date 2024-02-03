import React, { memo } from 'react'
import PropTypes from 'prop-types'
import type { IconProps } from '@tamagui/helpers-icon'
import {
  Svg,
  Circle as _Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Text as _Text,
  Use,
  Defs,
  Stop,
} from 'react-native-svg'
import { themed } from '@tamagui/helpers-icon'

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <Path d="M9 5v4" stroke={color} />
      <Rect width="4" height="6" x="7" y="9" rx="1" stroke={color} />
      <Path d="M9 15v2" stroke={color} />
      <Path d="M17 3v2" stroke={color} />
      <Rect width="4" height="8" x="15" y="5" rx="1" stroke={color} />
      <Path d="M17 13v3" stroke={color} />
      <Path d="M3 3v18h18" stroke={color} />
    </Svg>
  )
}

Icon.displayName = 'CandlestickChart'

export const CandlestickChart = memo<IconProps>(themed(Icon))
