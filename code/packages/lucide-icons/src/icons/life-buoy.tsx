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
      <_Circle cx="12" cy="12" r="10" stroke={color} />
      <Path d="m4.93 4.93 4.24 4.24" stroke={color} />
      <Path d="m14.83 9.17 4.24-4.24" stroke={color} />
      <Path d="m14.83 14.83 4.24 4.24" stroke={color} />
      <Path d="m9.17 14.83-4.24 4.24" stroke={color} />
      <_Circle cx="12" cy="12" r="4" stroke={color} />
    </Svg>
  )
}

Icon.displayName = 'LifeBuoy'

export const LifeBuoy = React.memo<IconProps>(themed(Icon))
