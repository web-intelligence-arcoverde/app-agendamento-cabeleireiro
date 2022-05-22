import React from 'react';
import {SvgXml} from 'react-native-svg';
import {Icons} from '../../../assets';

const Icon = ({icon, height, width}: any) => {
  return <SvgXml width={width} height={height} xml={Icons[icon]} fill="#000" />;
};

Icon.defaultProps = {
  height: 19,
  width: 21,
};

export default Icon;
