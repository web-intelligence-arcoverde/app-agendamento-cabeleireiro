import React from 'react';

import HeaderPurchasesHistory from '../../components/molecules/HeaderPurchasesHistory';
import ShoppingListHistory from '../../components/molecules/ShoppingListHistory';
import {Container} from '../../components/atoms/Container';

import Label from '../../components/atoms/Label';

const AppointmentHistory = ({navigation}) => {
  return (
    <Container padding={24} justify="center">
      <Label color="purple-800" variant="h2">
        Agenda
      </Label>

      <HeaderPurchasesHistory />
      <ShoppingListHistory navigation={navigation} />
    </Container>
  );
};

export default AppointmentHistory;
