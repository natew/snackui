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
      <_Circle cx="19" cy="19" r="2" stroke={color} />
      <_Circle cx="5" cy="5" r="2" stroke={color} />
      <Path d="M6.48 3.66a10 10 0 0 1 13.86 13.86" stroke={color} />
      <Path d="m6.41 6.41 11.18 11.18" stroke={color} />
      <Path d="M3.66 6.48a10 10 0 0 0 13.86 13.86" stroke={color} />
    </Svg>
  )
}

Icon.displayName = 'Diameter'

export const Diameter = memo<IconProps>(themed(Icon))
