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
      <_Circle cx="9" cy="9" r="2" stroke={color} />
      <Path
        d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10.8"
        stroke={color}
      />
      <Path d="m21 15-3.1-3.1a2 2 0 0 0-2.814.014L6 21" stroke={color} />
      <Path d="m14 19.5 3 3v-6" stroke={color} />
      <Path d="m17 22.5 3-3" stroke={color} />
    </Svg>
  )
}

Icon.displayName = 'ImageDown'

export const ImageDown = memo<IconProps>(themed(Icon))
