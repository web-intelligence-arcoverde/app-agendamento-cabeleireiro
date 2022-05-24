import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;

import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
  width: ${screenWidth}px;
  display: flex;
  flex-direction: row;
`;

import Icon from '../../atoms/Icon';
import Separator from '../../atoms/Separator';

const ContainerEnterprise = ({item, navigation}) => {
  return (
    <Container onPress={() => navigation.navigate('Details', item.id)}>
      <View
        style={{
          padding: 16,
          backgroundColor: '#F0E4FA',
          borderRadius: 16,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
        <Icon width={40} height={40} icon="hair-dryer" />
      </View>
      <View style={{marginLeft: 16}}>
        <View
          style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 16, lineHeight: 24}}>
            {item.enterprise}
          </Text>
        </View>
        <Separator width={6} />
        <View
          style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <Icon width={18} height={18} icon="local-point" />
          <Separator width={4} />
          <Text style={{fontSize: 14, lineHeight: 16}}>
            {item.address.city}
          </Text>
        </View>
        <Separator width={4} />
        <View
          style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <Icon width={18} height={18} icon="alarm-clock" />
          <Separator width={4} />
          <Text style={{fontSize: 14, lineHeight: 16, color: '#736F75'}}>
            {item.openEnterprise} - {item.closeEnterprise}
          </Text>
          <Separator width={4} />
          <Text
            style={{
              fontSize: 14,
              lineHeight: 16,
              color: item.status ? '#16731A' : '#CC2D2D',
            }}>
            Fechado
          </Text>
        </View>
      </View>
    </Container>
  );
};

export default ContainerEnterprise;
