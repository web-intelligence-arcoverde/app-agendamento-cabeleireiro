import styled from 'styled-components/native';
import {COLORS} from '../../../common';

export const CardContainer = styled.View`
    width: 64px
    height: 64px;
    background-color: ${({color}) =>
      color ? `${color}` : `${COLORS['white-dark']}`};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
`;
