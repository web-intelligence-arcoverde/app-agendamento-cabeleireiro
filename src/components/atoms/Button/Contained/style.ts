import styled from 'styled-components/native';
import {COLORS} from '../../../../common';

interface PropsButton {
  background?: string;
}

export const Button = styled.TouchableOpacity<PropsButton>`
  width: 100%;
  height: 52px;
  background-color: ${({background}) =>
    background ? `${COLORS[background]}` : `${COLORS['purple-500']}`};
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  color: ${({color}) =>
    color ? `${COLORS[color]}` : `${COLORS['white-200']}`};
`;
