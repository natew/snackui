import React from 'react'
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
      <Path d="M10 9H4L2 7l2-2h6" stroke={color} />
      <Path d="M14 5h6l2 2-2 2h-6" stroke={color} />
      <Path d="M10 22V4a2 2 0 1 1 4 0v18" stroke={color} />
      <Path d="M8 22h8" stroke={color} />
    </Svg>
  )
}

Icon.displayName = 'SignpostBig'

export const SignpostBig = React.memo<IconProps>(themed(Icon))
