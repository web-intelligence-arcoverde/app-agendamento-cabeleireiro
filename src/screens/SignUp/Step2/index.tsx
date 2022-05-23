import React from 'react';

import {messages} from '../../../validations/messages';
import Label from '../../../components/atoms/Label';
import {Container, StyledContainer} from '../../../components/atoms/Container';

import TextInput from '../../../components/atoms/Input';

import Button from '../../../components/atoms/Button/Contained';

import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';

import IconButton from '../../../components/atoms/Button/Icon';
import Separator from '../../../components/atoms/Separator';

const schema = yup
  .object({
    name: yup.string(),
  })
  .required();

const BasicInformationsUser = ({navigation, route}: any) => {
  const {
    setValue,
    handleSubmit,
    register,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });

  const {userType} = route.params;

  const selectedUserType = ({data}) => {
    if (userType === 'empresa') {
      navigation.navigate('SignUpStep3', {data, userType});
    } else {
      navigation.navigate('SignIn');
    }
  };

  return (
    <Container padding={24} justify="center">
      <StyledContainer direction="row" align="center">
        <IconButton
          height={21}
          icon="arrow-left-green"
          onPress={() => navigation.goBack()}
        />
        <Separator width={12} />
        <Label color="purple-800">Informações básicas</Label>
      </StyledContainer>

      <Separator width={22} />

      <TextInput
        label="Usuário"
        placeholder="Ex: marcosmacedo"
        onChangeText={text => setValue('name', text)}
      />

      <Separator width={10} />

      <TextInput
        label="Email"
        placeholder="Ex: marcos@gmail.com"
        onChangeText={text => setValue('cpf', text)}
      />

      <Separator width={10} />

      <TextInput
        label="Senha"
        placeholder="Informe sua senha"
        secureTextEntry={true}
        onChangeText={text => setValue('password', text)}
      />

      <Separator width={10} />
      <TextInput
        label="Confirme a senha"
        placeholder="Confirme sua senha "
        secureTextEntry={true}
        onChangeText={text => setValue('passwordConfirmation', text)}
      />

      <Separator width={20} />

      <Button name="Exemple" onPress={() => navigation.navigate('SignUpStep3')}>
        {userType === 'cliente' ? 'Criar conta' : 'Proximo'}
      </Button>
    </Container>
  );
};

export default BasicInformationsUser;
