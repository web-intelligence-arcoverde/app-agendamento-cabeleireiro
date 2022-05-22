import React, {useState} from 'react';

import {View} from 'react-native';

import Label from '../../components/atoms/Label';
import {Container, StyledContainer} from '../../components/atoms/Container';

import CardInformationsDashboard from '../../components/molecules/CardInformationsDashboard';
import PurchaseHistoric from '../../components/organisms/PurchaseHistoric';

import SignOut from '../SignOut';

const Home = ({navigation}: any) => {
  const [user, setUser] = useState('Lucas');
  const [currentBalance, setCurrentBalance] = useState(390);
  const [ticket, setTicket] = useState(30);

  return (
    <Container padding={30}>
      <Label color="green-dark">Olá {user}</Label>
      <View style={{padding: 10}} />
      <StyledContainer direction="row" justify="space-between">
        <CardInformationsDashboard
          text="Saldo atual"
          type="money"
          value={currentBalance}
        />
        <CardInformationsDashboard text="Quantidade de passes" value={ticket} />
      </StyledContainer>
      <View style={{padding: 16}} />

      <PurchaseHistoric />

      <SignOut navigation={navigation} />
    </Container>
  );
};

export default Home;
