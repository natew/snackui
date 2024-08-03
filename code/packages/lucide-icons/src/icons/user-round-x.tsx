import * as React from "react";
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

      <Path d="M2 21a8 8 0 0 1 11.873-7" stroke={color} />
      <_Circle cx="10" cy="8" r="5" stroke={color} />
      <Path d="m17 17 5 5" stroke={color} />
      <Path d="m22 17-5 5" stroke={color} />
    </Svg>);

};

Icon.displayName = 'UserRoundX';

export const UserRoundX = React.memo<IconProps>(themed(Icon));