import styled from 'styled-components/native';
import {COLORS} from '../../../../common';

interface PropsButton {
  background?: string;
}

interface PropsText {
  color?: string;
}

export const Button = styled.TouchableOpacity<PropsButton>`
  background-color: ${({background}) =>
    background ? `${COLORS[background]}` : `transparent`};
`;

export const Text = styled.Text<PropsText>`
  font-family: 'DMSans-Bold';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  color: ${({color}) => (color ? `${COLORS[color]}` : `${COLORS['gray-100']}`)};
`;
