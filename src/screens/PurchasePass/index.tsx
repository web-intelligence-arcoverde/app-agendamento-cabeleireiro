import React, {useState} from 'react';

import {View} from 'react-native';

import Label from '../../components/atoms/Label';
import {Container, StyledContainer} from '../../components/atoms/Container';

import TextInput from '../../components/atoms/Input';
import Button from '../../components/atoms/Button/Contained';
import ListContainerCardPaymentMethods from '../../components/organisms/ListContainerCardPaymentMethods';
import {COLORS} from '../../common';

import Icon from '../../components/atoms/Icon';

const PurchasePass = ({navigation}) => {
  const [passAmount, setPassAmount] = useState(0);
  const pricePassSingle = 1.35;

  return (
    <Container padding={30}>
      <StyledContainer direction="row" align="center">
        <Label color="green-dark" variant="h1">
          Deseja realizar uma recarga?
        </Label>
      </StyledContainer>

      <View style={{padding: 8}} />
      <TextInput
        label="Quantidade de passes"
        onChangeText={text => setPassAmount(text)}
        text="EX: 40"
      />

      <View style={{padding: 8}} />

      <ListContainerCardPaymentMethods />

      <View style={{padding: 8}} />

      <CreditCartContainer />

      <View style={{padding: 8}} />

      <StyledContainer
        direction="column"
        justify="space-between"
        color={'white-light'}
        padding={14}>
        <ContainerPaymentInformation
          text="Quantidade de passes"
          value={passAmount}
        />
        <View style={{padding: 2}} />
        <ContainerPaymentInformation
          text="Valor do passe"
          value={pricePassSingle}
        />
        <View
          style={{
            padding: 3,
            borderBottomWidth: 1,
            width: '100%',
            borderBottomColor: '#E9F0EB',
          }}
        />
        <ContainerPaymentInformation
          text="Valor total"
          value={passAmount * pricePassSingle}
        />
      </StyledContainer>

      <View style={{padding: 16}} />

      <Button onPress={() => console.log('exemple')}>Recarregar</Button>
    </Container>
  );
};

const ContainerPaymentInformation = ({text, value}) => {
  return (
    <StyledContainer
      direction="row"
      justify="space-between"
      color={'white-light'}>
      <Label variant="body2" color="gray-400">
        {text}
      </Label>
      <Label variant="body2" color="gray-800">
        {value}
      </Label>
    </StyledContainer>
  );
};

const CreditCartContainer = () => {
  return (
    <StyledContainer
      direction="row"
      padding={16}
      color="white-light"
      radius={6}>
      <View
        style={{
          width: 64,
          height: 64,
          backgroundColor: COLORS['green-light'],
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 6,
        }}>
        <Icon icon={'credit-card-icon'} width={33} height={33} />
      </View>

      <View style={{padding: 12}} />

      <StyledContainer direction="row">
        <StyledContainer>
          <Label variant="body4" color="green-dark">
            Cartão de crédito Visa
          </Label>
          <View style={{padding: 2}} />
          <Label variant="body2" color="green-dark">
            1234 5678 9123 4567
          </Label>
          <View style={{padding: 2}} />
          <Label variant="body2" color="green-dark">
            12/29
          </Label>
        </StyledContainer>
      </StyledContainer>
    </StyledContainer>
  );
};

export default PurchasePass;
