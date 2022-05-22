import styled from 'styled-components/native';
import {COLORS} from '../../../../common';

interface PropsButton {
  background?: string;
  borderColor?: string;
}

export const Button = styled.TouchableOpacity<PropsButton>`
  width: 100%;
  height: 52px;
  background-color: ${({background}) =>
    background ? `${COLORS[background]}` : `${COLORS['white-default']}`};

  justify-content: center;
  align-items: center;
  border-radius: 6px;
  border-width: 1px;

  border-color: ${({borderColor}) =>
    borderColor ? `${COLORS[borderColor]}` : `${COLORS['purple-500']}`};
`;

export const ButtonText = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 18px;
  color: ${({color}) =>
    color ? `${COLORS[color]}` : `${COLORS['purple-500']}`};
`;
