import React, {useState, useEffect} from 'react';
import {COLORS} from '../../common';
import {View, Text} from 'react-native';
import Modal from 'react-native-modal';
import Label from '../../components/atoms/Label';

import Button from '../../components/atoms/Button/Contained';
import {StyledContainer} from '../../components/atoms/Container';
import ButtonOutiline from '../../components/atoms/Button/Outiline/index';
import Icon from '../../components/atoms/Icon';

import {useDispatch, useSelector} from 'react-redux';
import {closeModalSignOut} from '../../store/modules/navigation/actions';
import Separator from '../../components/atoms/Separator';

export default function SignOut({navigation}) {
  const signOutVisible = useSelector(
    state => state.navigation.visible_modal_leave,
  );

  const dispatch = useDispatch();

  const handleCloseModalLeave = () => {
    dispatch(closeModalSignOut());
  };

  const handleClickSignOutRequest = () => {
    handleCloseModalLeave();
    navigation.navigate('SignIn');
  };

  return (
    <Modal
      isVisible={signOutVisible}
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
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          alignItems: 'center',
          padding: 30,
        }}>
        <Text
          style={{
            color: '#1E1E1F',
            fontSize: 18,
            lineHeight: 23,
            textAlign: 'center',
          }}>
          Fique mais um pouco. Deseja mesmo sair?
        </Text>

        <Separator width={12} />

        <View
          style={{
            padding: 20,
            backgroundColor: '#F0E4FA',
            borderRadius: 16,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
          <Icon width={64} height={64} icon="success-icon" />
        </View>

        <Separator width={12} />

        <View style={{padding: 10}} />
        <StyledContainer direction="row" justify="space-between">
          <StyledContainer width={45}>
            <Button onPress={handleClickSignOutRequest}>Sim</Button>
          </StyledContainer>
          <StyledContainer width={45}>
            <ButtonOutiline onPress={handleCloseModalLeave}>Não</ButtonOutiline>
          </StyledContainer>
        </StyledContainer>
      </View>
    </Modal>
  );
}
