import React from 'react';
import {View, Text} from 'react-native';
import Icon from '../Icon';

const TabBarIcon = ({icon, label}: any) => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Icon icon={icon} width={24} height={24} />
      <Text
        style={{
          marginTop: 4,
          fontSize: 12,
          textTransform: 'capitalize',
          color: '#736F75',
        }}>
        {label}
      </Text>
    </View>
  );
};

export default TabBarIcon;
