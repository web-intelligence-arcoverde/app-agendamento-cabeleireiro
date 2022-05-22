import React from 'react';

import {View} from 'react-native';

import {Container} from '../../atoms/Container';
import Label from '../../atoms/Label';

import HeaderPurchasesHistory from '../../molecules/HeaderPurchasesHistory';
import ShoppingListHistory from '../../molecules/ShoppingListHistory';

const PurchaseHistoric = () => {
  return (
    <Container>
      <Label color="green-dark" variant="h2">
        Historico
      </Label>

      <View style={{padding: 6}} />

      <HeaderPurchasesHistory />

      <View style={{padding: 6}} />

      <ShoppingListHistory />
    </Container>
  );
};

export default PurchaseHistoric;
