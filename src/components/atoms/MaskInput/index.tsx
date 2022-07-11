import React from 'react';

import {TextInputMask} from 'react-native-masked-text';

const MaskInput = ({type, value, onChangeText, placeholder}: any) => {
  return (
    <TextInputMask
      style={{width: '100%', height: 52}}
      type={type}
      value={value}
      placeholder={placeholder}
      onChangeText={text => {
        onChangeText(type, text);
      }}
    />
  );
};

export default MaskInput;
