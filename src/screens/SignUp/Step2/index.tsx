import React from 'react';

import {messages} from '../../../validations/messages';
import Label from '../../../components/atoms/Label';
import {Container, StyledContainer} from '../../../components/atoms/Container';

import TextInput from '../../../components/atoms/Input';
import {View} from 'react-native';

import Button from '../../../components/atoms/Button/Contained';

import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';

const schema = yup
  .object({
    name: yup.string(),
    cpf: yup.string().required(messages.required),
    password: yup
      .string()
      .min(6, messages.min6)
      .max(20, messages.max20)
      .required(messages.required),
    passwordConfirmation: yup
      .string()
      .test(
        'passwords-match',
        'As senhas devem se corresponder',
        function (value) {
          return this.parent.password === value;
        },
      ),
  })
  .required();

const BasicInformationsUser = () => {
  const {
    setValue,
    handleSubmit,
    register,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Container align="center" padding={24} justify="center">
      <StyledContainer>
        <Label color="purple-800">Criar conta</Label>
        <Label color="gray-300" variant="body2">
          Insira as informações básicas do usuário
        </Label>
      </StyledContainer>

      <TextInput
        label="Usuário"
        placeholder="Ex: marcosmacedo"
        onChangeText={text => setValue('name', text)}
        error={errors?.name}
      />

      <View style={{padding: 6}} />

      <TextInput
        label="Email"
        placeholder="Ex: marcos@gmail.com"
        onChangeText={text => setValue('cpf', text)}
        error={errors?.cpf}
      />

      <View style={{padding: 6}} />

      <TextInput
        label="SENHA"
        placeholder="Informe sua senha"
        secureTextEntry={true}
        onChangeText={text => setValue('password', text)}
        error={errors?.password}
      />

      <View style={{padding: 6}} />

      <TextInput
        label="CONFIRMAR SENHA"
        placeholder="Confirme sua senha "
        secureTextEntry={true}
        onChangeText={text => setValue('passwordConfirmation', text)}
        error={errors?.passwordConfirmation}
      />

      <Button
        name="Exemple"
        onPress={handleSubmit(data => {
          console.log(data);
        })}>
        Proximo
      </Button>
    </Container>
  );
};

export default BasicInformationsUser;
