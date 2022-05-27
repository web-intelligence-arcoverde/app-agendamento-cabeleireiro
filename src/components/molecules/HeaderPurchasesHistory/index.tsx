import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';

import {COLORS} from '../../../common';
import {StyledContainer} from '../../../components/atoms/Container';
import Label from '../../../components/atoms/Label';

const statusPayment = [
  {label: 'Hoje', value: 'hoje'},
  {label: 'Semana passada', value: 'semana passada'},
  {label: 'Proxima semana', value: 'Proxima semana'},
  {label: 'Mês passado', value: 'Mês passado'},
  {label: 'Proximo mês', value: 'Proximo mês'},
];

const HeaderPurchasesHistory = () => {
  const [selectedValue, setSelectedValue] = useState('hoje');
  const [countAppointments, setCountAppointments] = useState(10);

  const ListStatusOrders = statusPayment.map(status => {
    return <Picker.Item label={status.label} value={status.value} />;
  });
  return (
    <StyledContainer direction="row" align="flex-end" justify="space-between">
      <Label color="gray-200" variant="body1">
        {countAppointments} agendamentos
      </Label>
      <Picker
        selectedValue={selectedValue}
        style={{
          width: 180,
          backgroundColor: COLORS['white-100'],
          borderRadius: 12,
        }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        {ListStatusOrders}
      </Picker>
    </StyledContainer>
  );
};

export default HeaderPurchasesHistory;
