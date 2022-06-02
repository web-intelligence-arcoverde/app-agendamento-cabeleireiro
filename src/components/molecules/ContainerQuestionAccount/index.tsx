import React from 'react';
import {View} from 'react-native';

import {StyledContainer} from '../../atoms/Container';
import Label from '../../atoms/Label';
import {ButtonText} from '../../atoms/Button/Contained/style';

const QuestionAccount = ({navigation, question, text, router}) => {
  return (
    <StyledContainer align="center" direction="row" justify="center">
      <Label color="gray-300" variant="body1">
        {question}
      </Label>

      <View style={{padding: 2}} />

      <ButtonText
        color="orange-100"
        onPress={() => navigation.navigate(router)}>
        {text}
      </ButtonText>
    </StyledContainer>
  );
};

export default QuestionAccount;
