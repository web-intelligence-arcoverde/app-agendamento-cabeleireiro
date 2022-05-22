import React from 'react';
import {Button, Text} from './style';

const Index = ({children, onPress, background, disabled, color}: any) => {
  return (
    <Button
      onPress={() => onPress()}
      background={background}
      disabled={disabled}>
      <Text color={color}>{children}</Text>
    </Button>
  );
};

export default Index;
