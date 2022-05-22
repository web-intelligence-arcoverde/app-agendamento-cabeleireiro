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

import ScheduleItem from '../../../components/atoms/ScheduleContainer';
import {ScrollView} from 'react-native';

import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import Separator from '../../../components/atoms/Separator';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const ScheduleInformation = () => {
  const {
    setValue,
    handleSubmit,
    register,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });

  const renderItem = ({item}) => <Item title={item.title} />;

  return (
    <Container align="center" padding={24}>
      <StyledContainer>
        <Label color="purple-800">
          Informe o horario de funcionamento do seu estabelecimento
        </Label>
      </StyledContainer>

      <StyledContainer>
        <Label variant="body4">Horário de abertura(Manhã)</Label>
        <ScheduleItem />
      </StyledContainer>

      <Separator width={6} />

      <StyledContainer>
        <Label variant="body4">Horário de encerramento(Manhã)</Label>
        <ScheduleItem />
      </StyledContainer>

      <StyledContainer>
        <Label variant="body4">Horário de abertura(Tarde)</Label>
        <ScrollView>
          <ScrollView
            horizontal={true}
            style={{width: '150%'}}
            nestedScrollEnabled={true}>
            <ScheduleItem />
            <Separator width={6} />
            <ScheduleItem />
            <Separator width={6} />
            <ScheduleItem />
            <Separator width={6} />
            <ScheduleItem />
            <Separator width={6} />
            <ScheduleItem />
            <Separator width={6} />
            <ScheduleItem />
          </ScrollView>
        </ScrollView>
      </StyledContainer>

      <Separator width={6} />

      <ScrollView horizontal={true}>
        <FlatList
          data={DATA}
          horizontal={true}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </ScrollView>

      <StyledContainer>
        <Label variant="body4">Horário de encerramento(Tarde)</Label>
        <ScheduleItem />
      </StyledContainer>

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    height: 90,
  },
  title: {
    fontSize: 32,
  },
});

export default ScheduleInformation;
