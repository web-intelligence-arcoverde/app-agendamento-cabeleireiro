import React from 'react';
import {StyledContainer} from '../../atoms/Container';
import {View} from 'react-native';

import CardStatusPayment from './CardStatusPayment';
import ContainerInformations from './ContainerInformations';

const CardItemHistoryPayment = ({item}) => {
  return (
    <StyledContainer
      direction="row"
      padding={16}
      color="white-light"
      width={90}>
      <CardStatusPayment statusPayment={item.status_payment} />
      <View style={{padding: 10}} />
      <ContainerInformations item={item} />
    </StyledContainer>
  );
};

export default CardItemHistoryPayment;
