import styled from 'styled-components/native';
import {COLORS} from '../../../common';

export const Container = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Label = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: #323133;
  text-transform: none;
  color: ${COLORS['gray-500']};
`;

export const InputContainer = styled.View`
  margin-top: 8px;
  margin-bottom: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 52px;
  background: ${COLORS['gray-default']};

  border-color: ${({borderColor}) =>
    borderColor ? `${COLORS[borderColor]}` : `transparent`};
  border-style: solid;
  border-width: ${({borderWidth}) =>
    borderWidth ? `${borderWidth}px` : `1px`};

  border-radius: 12px;
  padding: 18px;
  padding-right: 32px;
`;

export const Input = styled.TextInput`
  width: 94%;
  height: 52px;
  color: #2a2b2b;
`;

export const TextError = styled.Text`
  font-family: 'DMSans-Regular';
  font-weight: 500;
  font-size: 12px;
  line-height: 13px;
  color: ${COLORS['red-default']};
`;
