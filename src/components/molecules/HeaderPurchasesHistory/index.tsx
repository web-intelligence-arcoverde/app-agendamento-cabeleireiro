import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';

import {COLORS} from '../../../common';
import {StyledContainer} from '../../../components/atoms/Container';
import Label from '../../../components/atoms/Label';

const statusPayment = [
  {label: 'Mais recentes', value: 'mais recentes'},
  {label: 'Mais antigos', value: 'mais antigos'},
  {label: 'Pendentes', value: 'pendentes'},
  {label: 'Aprovados', value: 'aprovados'},
  {label: 'Cancelados', value: 'cancelados'},
];

const HeaderPurchasesHistory = () => {
  const [selectedValue, setSelectedValue] = useState('mais recentes');

  const ListStatusOrders = statusPayment.map(status => {
    return <Picker.Item label={status.label} value={status.value} />;
  });
  return (
    <StyledContainer direction="row" align="flex-end" justify="space-between">
      <Label color="gray-100" variant="body2">
        40 transações
      </Label>
      <Picker
        selectedValue={selectedValue}
        style={{
          height: 38,
          width: 180,
          backgroundColor: COLORS['white-light'],
          borderRadius: 6,
          borderWidth: 1,
          borderColor: COLORS['white-dark'],
        }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        {ListStatusOrders}
      </Picker>
    </StyledContainer>
  );
};

export default HeaderPurchasesHistory;
