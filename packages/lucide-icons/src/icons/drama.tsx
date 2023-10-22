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
      <Path d="M 10 11h.01" stroke={color} />
      <Path d="M 14 6h.01" stroke={color} />
      <Path d="M 18 6h.01" stroke={color} />
      <Path d="M 6.5 13.1h.01" stroke={color} />
      <Path
        d="M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3"
        stroke={color}
      />
      <Path d="M17.4 9.9c-.8.8-2 .8-2.8 0" stroke={color} />
      <Path
        d="M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7"
        stroke={color}
      />
      <Path d="M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4" stroke={color} />
    </Svg>
  )
}

Icon.displayName = 'Drama'

export const Drama = memo<IconProps>(themed(Icon))
