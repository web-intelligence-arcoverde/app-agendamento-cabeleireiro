import React from 'react';

import {Typography} from '../../../common';
import {Label} from './style';

interface LabelProps {}

export default function ({variant, color, children}: any) {
  const style = Typography[variant ? variant : 'h1'];

  return (
    <Label {...style} color={color}>
      {children}
    </Label>
  );
}
