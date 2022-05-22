import React from 'react';
import {StyledContainer} from '../../atoms/Container';
import Label from '../../atoms/Label/';
import {View} from 'react-native';

const CardInformationsDashboard = ({text, value, type}: any) => {
  return (
    <StyledContainer width={48} color="green-default" radius={6} padding={12}>
      <Label color="white-default" variant="body2">
        {text}
      </Label>
      <View style={{padding: 4}} />
      <Label color="white-default" variant="h2">
        {type === 'money' ? `R$ ${value}` : value}
      </Label>
    </StyledContainer>
  );
};

export default CardInformationsDashboard;
