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

      <Path d="M2 6h4" stroke={color} />
      <Path d="M2 10h4" stroke={color} />
      <Path d="M2 14h4" stroke={color} />
      <Path d="M2 18h4" stroke={color} />
      <Rect width="16" height="20" x="4" y="2" rx="2" stroke={color} />
      <Path d="M15 2v20" stroke={color} />
      <Path d="M15 7h5" stroke={color} />
      <Path d="M15 12h5" stroke={color} />
      <Path d="M15 17h5" stroke={color} />
    </Svg>);

};

Icon.displayName = 'NotebookTabs';

export const NotebookTabs = React.memo<IconProps>(themed(Icon));