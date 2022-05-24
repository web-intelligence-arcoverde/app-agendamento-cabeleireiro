import React from 'react';
import {ScrollView} from 'react-native';

import ContainerEnterprise from '../../molecules/ContainerEnterprise';
import Separator from '../../atoms/Separator';

import {DATA} from '../../../mocks';

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
            <Separator width={12} />
          </>
        );
      })}
    </ScrollView>
  );
};

export default ContainerListEnterprises;
