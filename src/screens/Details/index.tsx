import React, {useEffect} from 'react';

import Label from '../../components/atoms/Label';
import {Container, StyledContainer} from '../../components/atoms/Container';
import ButtonContained from '../../components/atoms/Button/Contained';
import IconButton from '../../components/atoms/Button/Icon';

import Separator from '../../components/atoms/Separator';

import {View, Text} from 'react-native';
import Icon from '../../components/atoms/Icon';

const Splash = ({navigation, route}: any) => {
  const enterpriseId = route.params;

  useEffect(() => {
    console.log('searchEnterpriseById', enterpriseId);
  }, []);

  return (
    <Container padding={24}>
      <Separator width={4} />
      <StyledContainer direction="row" align="center">
        <IconButton
          height={21}
          icon="arrow-left-green"
          onPress={() => navigation.goBack()}
        />
        <Separator width={12} />
        <Label color="purple-800">Detalhes do estabelecimento</Label>
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
          Salão novo visual
        </Label>

        <Separator width={6} />

        <View
          style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <Icon width={18} height={18} icon="alarm-clock" />
          <Separator width={4} />
          <Text style={{fontSize: 14, lineHeight: 16, color: '#736F75'}}>
            14h-18h
          </Text>
          <Separator width={4} />
          <Text
            style={{
              fontSize: 14,
              lineHeight: 16,
              color: false ? '#16731A' : '#CC2D2D',
            }}>
            Fechado
          </Text>
        </View>

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

      <StyledContainer>
        <StyledContainer direction="row" justify="space-between">
          <Text style={{fontWeight: 'bold', fontSize: 14, lineHeight: 21}}>
            CEP
          </Text>
          <Text>64077-850</Text>
        </StyledContainer>
        <View
          style={{
            width: '100%',
            borderWidth: 1,
            borderColor: '#EBE8ED',
            marginTop: 12,
            marginBottom: 12,
          }}
        />
        <StyledContainer direction="row" justify="space-between">
          <Text style={{fontWeight: 'bold', fontSize: 14, lineHeight: 21}}>
            Bairro
          </Text>
          <Text>Parque Ideal</Text>
        </StyledContainer>
        <View
          style={{
            width: '100%',
            borderWidth: 1,
            borderColor: '#EBE8ED',
            marginTop: 12,
            marginBottom: 12,
          }}
        />
        <StyledContainer direction="row" justify="space-between">
          <Text style={{fontWeight: 'bold', fontSize: 14, lineHeight: 21}}>
            Rua
          </Text>
          <Text>Professor Cândido Soares</Text>
        </StyledContainer>
        <View
          style={{
            width: '100%',
            borderWidth: 1,
            borderColor: '#EBE8ED',
            marginTop: 12,
            marginBottom: 12,
          }}
        />
        <StyledContainer direction="row" justify="space-between">
          <Text style={{fontWeight: 'bold', fontSize: 14, lineHeight: 21}}>
            Numero
          </Text>
          <Text>6407</Text>
        </StyledContainer>
      </StyledContainer>

      <Separator width={28} />

      <ButtonContained
        onPress={() => navigation.navigate('Schedule', enterpriseId)}>
        Marcar agendamento
      </ButtonContained>
    </Container>
  );
};

export default Splash;
