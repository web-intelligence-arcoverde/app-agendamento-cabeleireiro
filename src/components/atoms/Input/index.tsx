import React, {useState} from 'react';
import {Input, Container, TextError, Label, InputContainer} from './style';

import Icon from '../../atoms/Button/Icon';

import ContainerIcon from '../Icon';

import MaskInput from '../MaskInput';

const Index = ({
  label,
  text,
  secureTextEntry,
  error,
  color,
  type,
  mask,
  icon,
  placeholder,
  ...inputProps
}: any) => {
  const [visiblePasswordText, setVisiblePasswordText] = useState(true);

  const borderInput = {
    error: {borderColor: 'red-default', borderWidth: 2},
    success: {borderColor: 'white-100', borderWidth: 1},
    default: {borderColor: 'white-100', borderWidth: 1},
  };

  const {borderColor, borderWidth} =
    borderInput[
      visiblePasswordText ? 'default' : !!error ? 'error' : 'success'
    ];

  return (
    <Container>
      <InputContainer
        borderColor={secureTextEntry && borderColor}
        borderWidth={secureTextEntry && borderWidth}>
        <ContainerIcon icon={icon} />
        {mask ? (
          <MaskInput
            placeholderTextColor={color}
            placeholder={text}
            type={type}
            placeholder={placeholder}
            secureTextEntry={
              !visiblePasswordText ? visiblePasswordText : secureTextEntry
            }
            {...inputProps}
          />
        ) : (
          <Input
            placeholderTextColor={color}
            placeholder={placeholder}
            secureTextEntry={
              !visiblePasswordText ? visiblePasswordText : secureTextEntry
            }
            {...inputProps}
          />
        )}
        {secureTextEntry && (
          <Icon
            icon={visiblePasswordText ? 'eye-close' : 'eye-open'}
            onPress={() => setVisiblePasswordText(!visiblePasswordText)}
          />
        )}
      </InputContainer>
      {!!error && <TextError>{error.message}</TextError>}
    </Container>
  );
};

export default Index;
