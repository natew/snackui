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
      <Path d="M21 12v3a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h7" stroke={color} />
      <Path d="M16 3h5v5" stroke={color} />
      <Path d="m16 8 5-5" stroke={color} />
    </Svg>
  )
}

Icon.displayName = 'MessageSquareShare'

export const MessageSquareShare = memo<IconProps>(themed(Icon))
