import React, {useEffect} from 'react';

import Label from '../../components/atoms/Label';
import {Container, StyledContainer} from '../../components/atoms/Container';
import ButtonContained from '../../components/atoms/Button/Contained';
import IconButton from '../../components/atoms/Button/Icon';

import Separator from '../../components/atoms/Separator';

import {View, Text} from 'react-native';
import Icon from '../../components/atoms/Icon';

const AppointmentDetails = ({navigation, route}: any) => {
  const enterpriseId = route.params;

  useEffect(() => {
    console.log('searchEnterpriseById', enterpriseId);
  }, []);

  return (
    <Container padding={24}>
      <Separator width={4} />
      <StyledContainer direction="row" align="center" width={80}>
        <IconButton
          height={21}
          icon="arrow-left-green"
          onPress={() => navigation.goBack()}
        />
        <Separator width={12} />
        <Label color="purple-800">Informações do cliente</Label>
      </StyledContainer>

      <Separator width={12} />

      <StyledContainer justify="center" align="center">
        <View
          style={{
            padding: 20,
            backgroundColor: '#F0E4FA',
            borderRadius: 16,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
          <Icon width={40} height={40} icon="hair-dryer" />
        </View>

        <Separator width={8} />

        <Label variant="h2" color="gray-500">
          Lucas Henrique
        </Label>

        <Separator width={6} />

        <View
          style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <Icon width={18} height={18} icon="alarm-clock" />
          <Separator width={4} />
          <Text style={{fontSize: 14, lineHeight: 16, color: '#736F75'}}>
            14:30
          </Text>
          <Separator width={4} />
        </View>

        <Separator width={6} />

        <Text
          style={{
            fontSize: 14,
            lineHeight: 16,
            color: true ? '#16731A' : '#CC2D2D',
          }}>
          Agendamento aceito
        </Text>

        <Separator width={6} />

        <View
          style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <IconButton
            width={18}
            height={18}
            icon="phone-icon"
            onPress={() => {}}
          />
          <Separator width={4} />
          <Text>(86)99502-8103</Text>
        </View>
      </StyledContainer>

      <Separator width={26} />

      <ButtonContained
        onPress={() => navigation.navigate('Schedule', enterpriseId)}>
        Aceitar agendamento
      </ButtonContained>
    </Container>
  );
};

export default AppointmentDetails;
