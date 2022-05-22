import React, {useState, useEffect} from 'react';
import {COLORS} from '../../common';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import Label from '../../components/atoms/Label';

import Button from '../../components/atoms/Button/Contained';
import {StyledContainer} from '../../components/atoms/Container';
import ButtonOutiline from '../../components/atoms/Button/Outiline/index';

import {useDispatch, useSelector} from 'react-redux';
import {closeModalSignOut} from '../../store/modules/navigation/actions';

export default function SignOut({navigation}) {
  console.log(navigation);
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
          flex: 0.15,
          backgroundColor: COLORS['white-default'],
          justifyContent: 'center',
          borderTopLeftRadius: 32,
          borderTopRightRadius: 32,
          padding: 30,
        }}>
        <Label color="gray-800" variant="h3">
          Deseja realmente sair?
        </Label>

        <View style={{padding: 10}} />
        <StyledContainer direction="row" justify="space-between">
          <StyledContainer width={45}>
            <ButtonOutiline onPress={handleCloseModalLeave}>Não</ButtonOutiline>
          </StyledContainer>
          <StyledContainer width={45}>
            <Button onPress={handleClickSignOutRequest}>Sim</Button>
          </StyledContainer>
        </StyledContainer>
      </View>
    </Modal>
  );
}
