import styled from 'styled-components/native';
import {COLORS} from '../../../common';

interface LabelProps {
  fontSize?: string;
  lineHeight?: string;
  fontFamily?: string;
  fontWight?: string;
  color?: string;
}

export const Label = styled.Text<LabelProps>`
  font-size: ${({fontSize}) => fontSize};
  line-height: ${({lineHeight}) => lineHeight};
  font-family: ${({fontFamily}) => fontFamily};
  font-weight: ${({fontWight}) => fontWight};
  color: ${({color}) => (color ? `${COLORS[color]}` : COLORS['white-default'])};
`;
