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

import {getTimeBlocks} from '../../util/genereteDate';

const Schedule = ({navigation, route}: any) => {
  const enterpriseId = route.params;

  const dispatch = useDispatch();

  const [getHours, setGetHours] = useState([]);

  const [hourSelected, setHourSelected] = useState({id: ''});
  const [dateSelected, setDateSelected] = useState({id: ''});

  useEffect(() => {
    console.log(
      'user esse id para procurar as informações da empresa',
      enterpriseId,
    );
    setGetHours(getTimeBlocks());
  }, []);

  var days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
  var d = new Date();
  var dayName = days[d.getDay()];

  const getAllDaysInMonth = (month, year) => {
    return Array.from(
      {length: new Date(year, month, 0).getDate()}, // get next month, zeroth's (previous) day
      (_, i) => new Date(year, month - 1, i + 1), // get current month (0 based index)
    );
  };

  const month = new Date().getMonth();
  console.log(month);
  const year = new Date().getFullYear();
  console.log(year);

  console.log(dayName);

  const allDatesInOctober = getAllDaysInMonth(month + 1, year);

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

      <Separator width={16} />

      <StyledContainer>
        <Label color="gray-600" variant="h3">
          Dias disponiveis
        </Label>

        <Separator width={6} />

        <ScrollView horizontal={true}>
          {allDatesInOctober.map((index, key) => {
            return (
              <>
                <ScheduleItem
                  onPress={() => setHourSelected({id: key})}
                  selected={hourSelected.id === key}
                  title={days[index.getDay()]}
                  subTitle={index.getUTCDate()}
                />
                <Separator width={8} />
              </>
            );
          })}
        </ScrollView>
      </StyledContainer>
      <Separator width={16} />

      <AvailableTimes />

      <Separator width={70} />

      <ButtonContained onPress={() => dispatch(createScheduleRequest())}>
        Agendar
      </ButtonContained>

      <SuccessCreateSchedule navigation={navigation} />
    </Container>
  );
};

const AvailableTimes = () => {
  const [getHours, setGetHours] = useState([]);
  const [hourSelected, setHourSelected] = useState({id: ''});

  useEffect(() => {
    setGetHours(getTimeBlocks());
  }, []);

  return (
    <StyledContainer>
      <Label color="gray-600" variant="h3">
        Horarios disponíveis
      </Label>

      <Separator width={6} />

      <ScrollView horizontal={true}>
        {getHours.map(index => {
          return (
            <>
              <ScheduleItem
                onPress={() => setHourSelected({id: index.id})}
                selected={hourSelected.id === index.id}
                title={'Manhã'}
                subTitle={index.timeValue}
                time
              />
              <Separator width={8} />
            </>
          );
        })}
      </ScrollView>
    </StyledContainer>
  );
};

export default Schedule;
