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
      <Rect width="18" height="7" x="3" y="3" rx="1" stroke={color} />
      <Rect width="7" height="7" x="3" y="14" rx="1" stroke={color} />
      <Rect width="7" height="7" x="14" y="14" rx="1" stroke={color} />
    </Svg>
  )
}

Icon.displayName = 'LayoutPanelTop'

export const LayoutPanelTop = React.memo<IconProps>(themed(Icon))
