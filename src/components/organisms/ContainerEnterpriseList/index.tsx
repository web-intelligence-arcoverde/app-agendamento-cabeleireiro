import React from 'react';
import {ScrollView} from 'react-native';

import ContainerEnterprise from '../../molecules/ContainerEnterprise';
import Separator from '../../atoms/Separator';

import {DATA} from '../../../mocks';

import {View} from 'react-native';

const ContainerListEnterprises = ({navigation}) => {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        width: '100%',
      }}>
      {DATA.map(item => {
        return (
          <>
            <ContainerEnterprise
              item={item}
              key={item.id}
              navigation={navigation}
            />
            <View
              style={{
                height: 1,
                borderWidth: 1,
                borderColor: '#EBE8ED',
                marginTop: 12,
                marginBottom: 12,
              }}
            />
          </>
        );
      })}
    </ScrollView>
  );
};

export default ContainerListEnterprises;
