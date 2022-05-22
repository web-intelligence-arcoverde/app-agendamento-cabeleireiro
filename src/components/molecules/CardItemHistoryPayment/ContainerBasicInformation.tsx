import React from 'react';
import {StyledContainer} from '../../atoms/Container';
import {View} from 'react-native';

import Label from '../../atoms/Label';

const PriceInformation = ({item}) => {
  return (
    <StyledContainer width={50}>
      <Label variant="body4" color="green-dark">
        #{item.id}
      </Label>
      <View style={{padding: 2}} />
      <Label variant="body2" color="green-dark">
        {item.payment_type}
      </Label>
      <View style={{padding: 2}} />
      <Label variant="body2" color="green-dark">
        R${item.price}
      </Label>
    </StyledContainer>
  );
};

export default PriceInformation;
