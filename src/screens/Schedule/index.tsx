import React, {useEffect, useState} from 'react';

import Label from '../../components/atoms/Label';
import {Container, StyledContainer} from '../../components/atoms/Container';
import ButtonContained from '../../components/atoms/Button/Contained';

import IconButton from '../../components/atoms/Button/Icon';

import Separator from '../../components/atoms/Separator';
import {ScrollView} from 'react-native-gesture-handler';

import ScheduleItem from '../../components/atoms/ScheduleContainer';

import SuccessCreateSchedule from '../SuccessCreateSchedule';

import {createScheduleRequest} from '../../store/modules/user/actions';
import {useDispatch} from 'react-redux';

const Schedule = ({navigation, route}: any) => {
  const enterpriseId = route.params;

  const dispatch = useDispatch();

  const [hourSelected, setHourSelected] = useState({id: ''});
  const [dateSelected, setDateSelected] = useState({id: ''});

  useEffect(() => {
    console.log(
      'user esse id para procurar as informações da empresa',
      enterpriseId,
    );
  }, []);

  return (
    <Container padding={24}>
      <Separator width={16} />
      <StyledContainer direction="row" align="center">
        <IconButton
          height={21}
          icon="arrow-left-green"
          onPress={() => navigation.goBack()}
        />
        <Separator width={12} />
        <Label color="purple-800">Agendamento</Label>
      </StyledContainer>
      <Separator width={6} />
      <Label color="gray-300" variant="body1">
        Para realizar o agendamento, escolha um dia e um horário logo abaixo.
      </Label>

      <Separator width={26} />

      <StyledContainer>
        <Label color="gray-600" variant="h3">
          Dias disponíveis
        </Label>

        <Separator width={6} />

        <ScrollView horizontal={true}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map(() => {
            return (
              <>
                <ScheduleItem />
                <Separator width={8} />
              </>
            );
          })}
        </ScrollView>
      </StyledContainer>

      <Separator width={26} />

      <StyledContainer>
        <Label color="gray-600" variant="h3">
          Horários disponíveis
        </Label>

        <Separator width={6} />

        <ScrollView horizontal={true}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map(() => {
            return (
              <>
                <ScheduleItem />
                <Separator width={8} />
              </>
            );
          })}
        </ScrollView>
      </StyledContainer>

      <Separator width={70} />

      <ButtonContained onPress={() => dispatch(createScheduleRequest())}>
        Agendar
      </ButtonContained>

      <SuccessCreateSchedule navigation={navigation} />
    </Container>
  );
};

export default Schedule;
