import React from 'react';
import {View, ScrollView} from 'react-native';

import CardItemHistoryPayment from '../CardItemHistoryPayment';

import {historyPayments} from '../../../mocks/mock';

const ShoppingListHistory = () => {
  const ListPaymentsHistory = historyPayments.map(item => {
    return (
      <>
        <CardItemHistoryPayment item={item} key={item.date} />
        <View style={{padding: 4}} />
      </>
    );
  });

  return <ScrollView>{ListPaymentsHistory}</ScrollView>;
};

export default ShoppingListHistory;
