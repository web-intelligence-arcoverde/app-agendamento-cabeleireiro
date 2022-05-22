import React, {useEffect} from 'react';

import {messages} from '../../validations/messages';
import Label from '../../components/atoms/Label';
import {Container, StyledContainer} from '../../components/atoms/Container';
import Button from '../../components/atoms/Button/Contained';
import ButtonText from '../../components/atoms/Button/Text';
import TextInput from '../../components/atoms/Input';
import {View} from 'react-native';

import * as yup from 'yup';

import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';

const schema = yup
  .object({
    cpf: yup.string().required(messages.required),
    password: yup
      .string()
      .min(6, messages.min6)
      .max(20, messages.max20)
      .required(messages.required),
  })
  .required();

const SignIn = ({navigation}: any) => {
  const {
    setValue,
    handleSubmit,
    register,
    formState: {errors},
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    register('cpf');
    register('password');
  }, [register]);

  return (
    <Container justify="center" align="center" padding={30}>
      <Label color="green-dark">RecargaBuss</Label>

      <View style={{padding: 26}} />

      <TextInput
        label="CPF (Somente números)"
        onChangeText={text => setValue('cpf', text)}
        error={errors?.cpf}
        keyboardType="numeric"
        maxLength={11}
        mask
        type="cpf"
      />

      <View style={{padding: 4}} />

      <TextInput
        label="SENHA"
        secureTextEntry={true}
        onChangeText={text => setValue('password', text)}
        error={errors?.password}
      />

      <View style={{padding: 4}} />

      <StyledContainer align="flex-end">
        <ButtonText onPress={() => navigation.navigate('Recovery')}>
          Esqueceu a senha?
        </ButtonText>
      </StyledContainer>

      <View style={{padding: 8}} />

      <Button
        onPress={handleSubmit(data => {
          console.log(data);
          navigation.navigate('Dashboard');
        })}>
        Entrar
      </Button>

      <View style={{padding: 8}} />

      <StyledContainer align="center">
        <Label color="gray-400" variant="body1">
          Ainda não possui uma conta?
        </Label>

        <View style={{padding: 6}} />

        <ButtonText
          color="green-default"
          onPress={() => navigation.navigate('SignUp')}>
          Crie uma agora
        </ButtonText>
      </StyledContainer>
    </Container>
  );
};

export default SignIn;
