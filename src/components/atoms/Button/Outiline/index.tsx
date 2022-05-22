import React from 'react';
import {Button, ButtonText} from './style';

const Index = ({
  children,
  onPress,
  background,
  disabled,
  borderColor,
  color,
}: any) => {
  return (
    <Button
      onPress={() => onPress()}
      background={background}
      borderColor={borderColor}
      disabled={disabled}>
      <ButtonText color={color}>{children}</ButtonText>
    </Button>
  );
};

export default Index;
