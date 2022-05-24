import React from 'react';
import {COLORS} from '../../common';
import {View} from 'react-native';
import Modal from 'react-native-modal';

import ButtonOutiline from '../../components/atoms/Button/Outiline/index';

import {useDispatch, useSelector} from 'react-redux';

import {Text} from 'react-native';
import Separator from '../../components/atoms/Separator';

import Icon from '../../components/atoms/Icon';
import {closeModalSuccessCreateSchedule} from '../../store/modules/user/actions';

export default function SuccessCreateSchedule({navigation}) {
  const dispatch = useDispatch();

  const visible = useSelector(
    state => state.user.visible_modal_success_create_schedule,
  );

  const handleCloseModal = () => {
    dispatch(closeModalSuccessCreateSchedule());
    navigation.navigate('Dashboard');
  };

  return (
    <Modal
      isVisible={visible}
      swipeDirection="down"
      style={{
        justifyContent: 'flex-end',
        margin: 0,
        flex: 1,
      }}>
      <View
        style={{
          flex: 0.42,
          backgroundColor: COLORS['white-100'],
          alignItems: 'center',
          borderTopLeftRadius: 32,
          borderTopRightRadius: 32,
          padding: 30,
        }}>
        <View
          style={{
            padding: 20,
            backgroundColor: '#F0E4FA',
            borderRadius: 16,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
          <Icon width={40} height={40} icon="success-icon" />
        </View>

        <Separator width={10} />

        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            lineHeight: 26,
            fontWeight: 'bold',
            color: '#1E1E1F',
          }}>
          Agendamento marcado com sucesso
        </Text>

        <Separator width={10} />

        <Text
          style={{
            textAlign: 'center',
            fontSize: 14,
            lineHeight: 22,
            color: '4B494D',
          }}>
          Agradecemos por confiar no 2Beauty. Esperamos que tenha um bom
          atendimento.
        </Text>

        <Separator width={12} />

        <ButtonOutiline onPress={handleCloseModal}>
          Ver estabelecimentos
        </ButtonOutiline>
      </View>
    </Modal>
  );
}
