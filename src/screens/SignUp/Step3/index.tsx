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

const IntroEnterpriseInformation = () => {
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
        <Label color="purple-800">Vamos criar seu negócio</Label>
        <Label color="gray-300" variant="body2">
          Precisaremos de alguns dados seus. Não vai durar dois minutos.
        </Label>
      </StyledContainer>

      <Button
        name="Exemple"
        onPress={handleSubmit(data => {
          console.log(data);
        })}>
        Vamos lá
      </Button>
    </Container>
  );
};

export default IntroEnterpriseInformation;
