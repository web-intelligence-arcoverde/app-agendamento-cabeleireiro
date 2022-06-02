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

import ContainerAccountQuestion from '../../components/molecules/ContainerQuestionAccount';

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
    <Container justify="center" align="center" padding={22}>
      <Label color="orange-100" variant="title">
        Beauty Hair
      </Label>

      <View style={{padding: 26}} />

      <TextInput
        placeholder="Email"
        color="#736F75"
        onChangeText={text => setValue('cpf', text)}
        error={errors?.cpf}
      />

      <View style={{padding: 12}} />

      <TextInput
        placeholder="Senha"
        color="#736F75"
        secureTextEntry={true}
        onChangeText={text => setValue('password', text)}
        error={errors?.password}
      />

      <View style={{padding: 12}} />

      <Button onPress={() => navigation.navigate('Dashboard')}>Entrar</Button>

      <View style={{padding: 12}} />

      <StyledContainer align="center">
        <ButtonText
          onPress={() => navigation.navigate('RecoveryAccount')}
          color="orange-100">
          Esqueceu a senha?
        </ButtonText>
      </StyledContainer>

      <View style={{padding: 12}} />

      <ContainerAccountQuestion
        navigation={navigation}
        question="Não tem conta?"
        text=" Inscrever-se"
        router="SignUpStep1"
      />
    </Container>
  );
};

export default SignIn;
