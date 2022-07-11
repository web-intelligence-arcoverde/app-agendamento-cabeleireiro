import React, {useState} from 'react';

import ContainerAccountQuestion from '../../../components/molecules/ContainerQuestionAccount';
import Label from '../../../components/atoms/Label';
import {Container, StyledContainer} from '../../../components/atoms/Container';
import Button from '../../../components/atoms/Button/Contained';
import IconButton from '../../../components/atoms/Button/Icon';
import Select from '../../../components/atoms/Select';

import Separator from '../../../components/atoms/Separator';

const usersTypes = [
  {label: '', value: ''},
  {label: 'Cliente', value: 'cliente'},
  {label: 'Empresa', value: 'empresa'},
];

const SelecteUserType = ({navigation}) => {
  const [userType, setUserType] = useState('');

  return (
    <Container padding={24} justify="center">
      <StyledContainer direction="row" align="center">
        <IconButton
          height={21}
          icon="arrow-left-green"
          onPress={() => navigation.goBack()}
        />
        <Separator width={12} />
        <Label color="orange-100">Criar conta</Label>
      </StyledContainer>

      <Separator width={22} />

      <Label color="gray-300" variant="body1">
        Precisaremos de alguns dados seus. Não vai durar dois minutos.
      </Label>

      <Separator width={12} />

      <Select
        text="Tipo de usuário"
        options={usersTypes}
        value={userType}
        setValue={setUserType}
      />

      <Separator width={12} />

      <Button
        name="Exemple"
        onPress={() => navigation.navigate('SignUpStep2', {userType})}>
        Proximo
      </Button>

      <Separator width={28} />

      <ContainerAccountQuestion
        navigation={navigation}
        router="SignIn"
        question="Já possui uma conta?"
        text="Faça login"
      />
    </Container>
  );
};

export default SelecteUserType;
