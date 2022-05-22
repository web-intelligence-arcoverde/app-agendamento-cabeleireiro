import styled from 'styled-components/native';
import {COLORS} from '../../../../common';

interface PropsButton {
  background?: string;
}

export const Button = styled.TouchableOpacity<PropsButton>`
  width: 100%;
  height: 52px;
  background-color: ${({background}) =>
    background ? `${COLORS[background]}` : `${COLORS['green-default']}`};
  justify-content: center;
  align-items: center;
  border-radius: 6px;
`;

export const ButtonText = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  color: white;
`;
