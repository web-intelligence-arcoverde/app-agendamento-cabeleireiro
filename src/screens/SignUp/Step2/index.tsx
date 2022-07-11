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

  console.log(userType);

  const selectedUserType = ({data}) => {
    if (userType === 'empresa') {
      navigation.navigate('SignUpStep3', {data, userType});
    } else {
      navigation.navigate('SignIn');
    }
  };

  return (
    <Container padding={24}>
      <StyledContainer>
        <Label color="orange-100">Informações básicas</Label>
      </StyledContainer>

      <TextInput
        icon="email-icon"
        label="Email"
        placeholder="Informe seu nome"
        onChangeText={text => setValue('cpf', text)}
      />

      <TextInput
        icon="lock-icon"
        placeholder="Telefone"
        onChangeText={text => setValue('passwordConfirmation', text)}
        mask
        type="cel-phone"
      />

      <TextInput
        icon="email-icon"
        label="Email"
        placeholder="Informe seu email"
        onChangeText={text => setValue('cpf', text)}
      />

      <TextInput
        icon="lock-icon"
        label="Senha"
        placeholder="Informe sua senha"
        secureTextEntry={true}
        onChangeText={text => setValue('password', text)}
      />

      <TextInput
        icon="lock-icon"
        label="Confirme a senha"
        placeholder="Confirme sua senha "
        secureTextEntry={true}
        onChangeText={text => setValue('passwordConfirmation', text)}
      />

      <Button
        name="Exemple"
        onPress={handleSubmit(data => selectedUserType(data))}>
        {userType === 'cliente' ? 'Criar conta' : 'Proximo'}
      </Button>
    </Container>
  );
};

export default BasicInformationsUser;
