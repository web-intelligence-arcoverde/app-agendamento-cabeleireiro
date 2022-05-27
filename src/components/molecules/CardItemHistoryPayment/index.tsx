import React from 'react';
import {StyledContainer} from '../../atoms/Container';
import {View} from 'react-native';

import CardStatusPayment from './CardStatusPayment';
import ContainerInformations from './ContainerInformations';
import {TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const CardItemHistoryPayment = ({item}) => {
  const navigation = useNavigation();

  console.log(navigation);
  return (
    <TouchableOpacity onPress={() => navigation.navigate('AppointmentDetail')}>
      <StyledContainer
        direction="row"
        padding={16}
        color="white-light"
        width={90}>
        <CardStatusPayment statusPayment={item.status_payment} />
        <View style={{padding: 10}} />
        <ContainerInformations item={item} />
      </StyledContainer>
    </TouchableOpacity>
  );
};

export default CardItemHistoryPayment;
