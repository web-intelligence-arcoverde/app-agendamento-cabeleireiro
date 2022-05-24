import React, {useState} from 'react';
import {View} from 'react-native';
import Label from '../Label';
import {COLORS} from '../../../common';
import Separator from '../Separator';

import {TouchableOpacity} from 'react-native';

const ScheduleItem = ({shift, schedule}) => {
  const [selected, setSelected] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => setSelected(!selected)}
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
        Manhã
      </Label>
      <Separator width={4} />
      <Label variant="schedule" color={selected ? 'purple-500' : 'gray-600'}>
        08:00
      </Label>
    </TouchableOpacity>
  );
};

export default ScheduleItem;
