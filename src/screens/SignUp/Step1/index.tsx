import React, {useEffect, useState} from 'react';

import {messages} from '../../../validations/messages';
import Label from '../../../components/atoms/Label';
import {Container, StyledContainer} from '../../../components/atoms/Container';
import Button from '../../../components/atoms/Button/Contained';
import IconButton from '../../../components/atoms/Button/Icon';
import TextInput from '../../../components/atoms/Input';
import {View} from 'react-native';

import {COLORS} from '../../../common';

import {Picker} from '@react-native-picker/picker';

import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';

import ContainerAccountQuestion from '../../../components/molecules/ContainerQuestionAccount';
import {ScrollView} from 'react-native-gesture-handler';

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

const usersTypes = [
  {label: 'Cliente', value: 'cliente'},
  {label: 'Empresa', value: 'empresa'},
];

const SelecteUserType = () => {
  const {
    setValue,
    handleSubmit,
    register,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [selectedValue, setSelectedValue] = useState('cliente');

  const onSubmit = () => {
    if (selectedValue === 'cliente') {
    } else {
    }
  };

  useEffect(() => {
    register('name');
    register('cpf');
    register('password');
    register('passwordConfirmation');
  }, [register]);

  const ListStatusOrders = usersTypes.map(status => {
    return <Picker.Item label={status.label} value={status.value} />;
  });

  return (
    <Container padding={24} justify="center">
      <StyledContainer direction="row" align="center">
        <IconButton height={21} icon="arrow-left-green" onPress={() => {}} />
        <Label color="purple-800">Criar conta</Label>
      </StyledContainer>

      <Label color="gray-300" variant="body2">
        Aqui vamos informar o tipo de usuário que vamos criar
      </Label>

      <StyledContainer>
        <Label color="gray-500" variant="body4">
          Tipo de usuário
        </Label>
        <Picker
          selectedValue={selectedValue}
          style={{
            height: 34,
            width: '100%',
            backgroundColor: COLORS['white-100'],
            borderRadius: 8,
          }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
          {ListStatusOrders}
        </Picker>
      </StyledContainer>

      <View style={{padding: 12}} />

      <Button
        name="Exemple"
        onPress={handleSubmit(data => {
          console.log(data);
        })}>
        Proximo
      </Button>

      <ContainerAccountQuestion
        question="Já possui uma conta?"
        text="Faça login"
      />
    </Container>
  );
};

export default SelecteUserType;
