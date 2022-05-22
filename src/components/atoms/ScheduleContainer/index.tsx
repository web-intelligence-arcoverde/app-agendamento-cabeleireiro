import React from 'react';
import {View} from 'react-native';
import Label from '../Label';
import {COLORS} from '../../../common';
import Separator from '../Separator';

const ScheduleItem = ({shift, schedule}) => {
  return (
    <View
      style={{
        borderRadius: 14,
        backgroundColor: COLORS['white-300'],
        padding: 12,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 74,
        height: 78,
      }}>
      <Label variant="body2">Manhã</Label>
      <Separator width={4} />
      <Label variant="schedule" color="gray-600">
        08:00
      </Label>
    </View>
  );
};

export default ScheduleItem;
