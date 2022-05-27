import React from 'react';
import {View, ScrollView} from 'react-native';

import CardItemHistoryPayment from '../CardItemHistoryPayment';

import {historyPaymentsMock} from '../../../mocks/';

const ShoppingListHistory = ({navigation}) => {
  const ListPaymentsHistory = historyPaymentsMock.map(item => {
    return (
      <>
        <CardItemHistoryPayment
          item={item}
          key={item.date}
          navigation={navigation}
        />
        <View style={{padding: 4}} />
      </>
    );
  });

  return <ScrollView>{ListPaymentsHistory}</ScrollView>;
};

export default ShoppingListHistory;
