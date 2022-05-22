import React from 'react';
import {View} from 'react-native';

import {StyledContainer} from '../../atoms/Container';
import Label from '../../atoms/Label';
import {ButtonText} from '../../atoms/Button/Contained/style';

const QuestionAccount = ({navigation, question, text}) => {
  return (
    <StyledContainer align="center">
      <Label color="gray-300" variant="body1">
        {question}
      </Label>

      <View style={{padding: 2}} />

      <ButtonText
        color="purple-400"
        onPress={() => navigation.navigate('SignUp')}>
        {text}
      </ButtonText>
    </StyledContainer>
  );
};

export default QuestionAccount;
