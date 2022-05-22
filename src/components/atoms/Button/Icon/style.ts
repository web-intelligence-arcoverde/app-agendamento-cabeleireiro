import styled from 'styled-components/native';
import {COLORS} from '../../../../common';

interface PropsButton {
  background?: string;
  padding?: string;
  radius?: string;
}

export const Button = styled.TouchableOpacity<PropsButton>`
  background-color: ${({background}) =>
    background ? `${COLORS[background]}` : `transparent`};

  padding: ${({padding}) => (padding ? padding : 0)}px;
  border-radius: ${({radius}) => (radius ? radius : 0)}px;
`;
