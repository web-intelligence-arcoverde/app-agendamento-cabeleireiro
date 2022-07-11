import React, {useEffect} from 'react';

import {messages} from '../../validations/messages';
import Label from '../../components/atoms/Label';
import {Container, StyledContainer} from '../../components/atoms/Container';
import Button from '../../components/atoms/Button/Contained';
import ButtonText from '../../components/atoms/Button/Text';
import TextInput from '../../components/atoms/Input';
import {TouchableOpacity, View} from 'react-native';

import * as yup from 'yup';

import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';

import ContainerAccountQuestion from '../../components/molecules/ContainerQuestionAccount';
import IconButton from '../../components/atoms/Button/Icon';
import Icon from '../../components/atoms/Icon';

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
    <Container justify="center" padding={22}>
      <Label color="orange-100" variant="title">
        Faça login na sua conta
      </Label>

      <TextInput
        icon="email-icon"
        placeholder="Email"
        color="#736F75"
        onChangeText={text => setValue('cpf', text)}
        error={errors?.cpf}
      />

      <TextInput
        icon="lock-icon"
        placeholder="Senha"
        color="#736F75"
        secureTextEntry={true}
        onChangeText={text => setValue('password', text)}
        error={errors?.password}
      />

      <Button onPress={() => navigation.navigate('Dashboard')}>Entrar</Button>

      <StyledContainer align="center">
        <ButtonText
          onPress={() => navigation.navigate('RecoveryAccount')}
          color="orange-100">
          Esqueceu a senha?
        </ButtonText>
      </StyledContainer>

      <StyledContainer justify="center" align="center">
        <Label color="gray-300" variant="h3">
          ou continue com
        </Label>
      </StyledContainer>

      <StyledContainer direction="row" justify="space-evenly">
        <SocialButton icon="google-icon" />
        <SocialButton icon="facebook-icon" />
        <SocialButton icon="apple-icon" />
      </StyledContainer>

      <ContainerAccountQuestion
        navigation={navigation}
        question="Não tem conta?"
        text=" Inscrever-se"
        router="SignUpStep1"
      />
    </Container>
  );
};

const SocialButton = ({icon}) => {
  return (
    <TouchableOpacity
      onPress={() => {}}
      style={{
        padding: 12,
        borderWidth: 1,
        borderRadius: 12,
        borderColor: '#F2F2F2',
      }}>
      <Icon icon={icon} width={28} height={28} />
    </TouchableOpacity>
  );
};

export default SignIn;
