import React from "react";
import PropTypes from 'prop-types';
import type { IconProps } from '@tamagui/helpers-icon';
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
  Stop } from
'react-native-svg';
import { themed } from '@tamagui/helpers-icon';

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props;
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
      {...otherProps}>

      <Path d="M9.31 9.31 5 21l7-4 7 4-1.17-3.17" stroke={color} />
      <Path d="M14.53 8.88 12 2l-1.17 3.17" stroke={color} />
      <Line x1="2" x2="22" y1="2" y2="22" stroke={color} />
    </Svg>);

};

Icon.displayName = 'Navigation2Off';

export const Navigation2Off = React.memo<IconProps>(themed(Icon));