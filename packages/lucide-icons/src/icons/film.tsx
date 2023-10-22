import type { IconProps } from '@tamagui/helpers-icon'
import { themed } from '@tamagui/helpers-icon'
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
      <Rect width="18" height="18" x="3" y="3" rx="2" stroke={color} />
      <Path d="M7 3v18" stroke={color} />
      <Path d="M3 7.5h4" stroke={color} />
      <Path d="M3 12h18" stroke={color} />
      <Path d="M3 16.5h4" stroke={color} />
      <Path d="M17 3v18" stroke={color} />
      <Path d="M17 7.5h4" stroke={color} />
      <Path d="M17 16.5h4" stroke={color} />
    </Svg>
  )
}

Icon.displayName = 'Film'

export const Film = memo<IconProps>(themed(Icon))
