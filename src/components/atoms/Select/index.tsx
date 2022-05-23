import React from 'react';

import {Picker} from '@react-native-picker/picker';

import {StyledContainer} from '../Container';
import Label from '../Label';
import {COLORS} from '../../../common';

const Select = ({text, value, setValue, options}) => {
  const renderListOptions = options.map(status => {
    return (
      <Picker.Item
        label={status.label}
        key={status.value}
        value={status.value}
      />
    );
  });

  return (
    <StyledContainer>
      <Label color="gray-500" variant="body4">
        {text}
      </Label>
      <Picker
        selectedValue={value}
        style={{
          height: 34,
          width: '100%',
          backgroundColor: COLORS['white-100'],
          borderRadius: 8,
          marginBottom: 24,
          marginTop: 12,
        }}
        onValueChange={(itemValue, itemIndex) => setValue(itemValue)}>
        {renderListOptions}
      </Picker>
    </StyledContainer>
  );
};

Select.defaultProps = {
  options: [],
};

export default Select;
