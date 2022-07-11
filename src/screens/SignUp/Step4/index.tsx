import React from 'react';

import {messages} from '../../../validations/messages';
import Label from '../../../components/atoms/Label';
import {Container, StyledContainer} from '../../../components/atoms/Container';

import TextInput from '../../../components/atoms/Input';

import Button from '../../../components/atoms/Button/Contained';

import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import Separator from '../../../components/atoms/Separator';
import {ScrollView} from 'react-native-gesture-handler';

import {openModalSignOut} from '../../../store/modules/navigation/actions';
import {useDispatch} from 'react-redux';

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

const ScheduleInformation = ({navigation, route}) => {
  const {
    setValue,
    handleSubmit,
    register,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
      <Container align="center" padding={24}>
        <StyledContainer>
          <Label color="orange-100">Endereço do estabelecimento</Label>
          <Label color="gray-300" variant="body1">
            Informe o endereço do seu estabelecimento
          </Label>
        </StyledContainer>

        <Separator width={18} />

        <TextInput
          icon="lock-icon"
          label="CEP"
          placeholder="Ex: Barbearia Alves"
          onChangeText={text => setValue('name', text)}
          error={errors?.name}
        />

        <Separator width={8} />

        <TextInput
          icon="lock-icon"
          label="Cidade"
          placeholder="Ex: xx.xxx.xxx/xxxx-xx"
          onChangeText={text => setValue('cpf', text)}
          error={errors?.cpf}
        />

        <Separator width={8} />

        <TextInput
          icon="lock-icon"
          label="Bairro"
          placeholder="Ex: xx.xxx.xxx/xxxx-xx"
          onChangeText={text => setValue('cpf', text)}
          error={errors?.cpf}
        />

        <Separator width={8} />

        <TextInput
          icon="lock-icon"
          label="Rua"
          placeholder="Ex: (86)9995028103"
          onChangeText={text => setValue('password', text)}
          error={errors?.password}
        />

        <Separator width={8} />

        <TextInput
          icon="lock-icon"
          label="Numero"
          placeholder="Ex: (86)9995028103"
          onChangeText={text => setValue('password', text)}
          error={errors?.password}
        />

        <Separator width={8} />

        <Button name="Exemple" onPress={() => navigation.navigate('SignIn')}>
          Criar negócio
        </Button>
      </Container>
    </ScrollView>
  );
};

export default ScheduleInformation;
