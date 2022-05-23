import React from 'react';

import Label from '../../components/atoms/Label';
import {Container} from '../../components/atoms/Container';
import ButtonContained from '../../components/atoms/Button/Contained';
import ButtonOutiline from '../../components/atoms/Button/Outiline';

import Separator from '../../components/atoms/Separator';

const Splash = ({navigation}: any) => {
  return (
    <Container justify="center" align="center" padding={24}>
      <Label color="purble-900">2Beauty</Label>
      <Separator width={12} />
      <Label color="gray-300" variant="body1">
        Agende seu horário de qualquer lugar
      </Label>
      <Separator width={112} />
      <ButtonContained onPress={() => navigation.navigate('SignUpStep1')}>
        Criar conta
      </ButtonContained>
      <Separator width={12} />
      <ButtonOutiline onPress={() => navigation.navigate('SignIn')}>
        Fazer login
      </ButtonOutiline>
    </Container>
  );
};

export default Splash;
