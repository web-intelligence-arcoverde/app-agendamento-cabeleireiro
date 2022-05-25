import React from 'react';
import Label from '../Label';
import {COLORS} from '../../../common';
import Separator from '../Separator';

import {TouchableOpacity} from 'react-native';

const ScheduleItem = ({onPress, selected, title, subTitle, time}) => {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={{
        borderRadius: 14,
        backgroundColor: selected ? COLORS['purple-100'] : COLORS['white-300'],
        padding: 12,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 74,
        height: 78,
      }}>
      <Label variant="body2" color={selected ? 'purple-500' : 'gray-600'}>
        {title}
      </Label>
      <Separator width={4} />
      <Label variant="schedule" color={selected ? 'purple-500' : 'gray-600'}>
        {subTitle}
      </Label>
    </TouchableOpacity>
  );
};

export default ScheduleItem;
