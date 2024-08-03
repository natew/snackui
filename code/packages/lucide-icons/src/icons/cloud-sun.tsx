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

      <Path d="M12 2v2" stroke={color} />
      <Path d="m4.93 4.93 1.41 1.41" stroke={color} />
      <Path d="M20 12h2" stroke={color} />
      <Path d="m19.07 4.93-1.41 1.41" stroke={color} />
      <Path d="M15.947 12.65a4 4 0 0 0-5.925-4.128" stroke={color} />
      <Path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z" stroke={color} />
    </Svg>);

};

Icon.displayName = 'CloudSun';

export const CloudSun = React.memo<IconProps>(themed(Icon));