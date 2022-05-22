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

const BasicInformationsEnterprise = () => {
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
        <Label color="purple-800">Sobre seu estabelecimento</Label>
      </StyledContainer>

      <TextInput
        label="Nome da sua empresa"
        placeholder="Ex: Barbearia Alves"
        onChangeText={text => setValue('name', text)}
        error={errors?.name}
      />

      <View style={{padding: 6}} />

      <TextInput
        label="CNPJ"
        placeholder="Ex: xx.xxx.xxx/xxxx-xx"
        onChangeText={text => setValue('cpf', text)}
        error={errors?.cpf}
      />

      <View style={{padding: 6}} />

      <TextInput
        label="Telefone"
        placeholder="Ex: (86)9995028103"
        onChangeText={text => setValue('password', text)}
        error={errors?.password}
      />

      <View style={{padding: 6}} />

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

export default BasicInformationsEnterprise;
