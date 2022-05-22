import React from 'react';
import {View, Text} from 'react-native';
import Icon from '../Icon';

const TabBarIcon = ({icon, label}: any) => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Icon icon={icon} />
      <Text
        style={{
          color: 'white',
          marginTop: 4,
          fontSize: 12,
          textTransform: 'capitalize',
        }}>
        {label}
      </Text>
    </View>
  );
};

export default TabBarIcon;
