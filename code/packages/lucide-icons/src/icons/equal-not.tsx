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
      <Line x1="5" x2="19" y1="9" y2="9" stroke={color} />
      <Line x1="5" x2="19" y1="15" y2="15" stroke={color} />
      <Line x1="19" x2="5" y1="5" y2="19" stroke={color} />
    </Svg>
  )
}

Icon.displayName = 'EqualNot'

export const EqualNot = React.memo<IconProps>(themed(Icon))
