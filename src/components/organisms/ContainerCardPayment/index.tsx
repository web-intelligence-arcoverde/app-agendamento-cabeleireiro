import React from 'react';
import {COLORS} from '../../../common';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import Label from '../../atoms/Label';

import Button from '../../atoms/Button/Contained';
import TextInput from '../../atoms/Input';
import {StyledContainer} from '../../atoms/Container';

import {useDispatch, useSelector} from 'react-redux';
import {
  closeModalAddCart,
  closeModalTicket,
} from '../../../store/modules/pruchase/actions';

export default function ContainerBarCode() {
  const visible = useSelector(state => state.purchase.visible_modal_card);
  const dispatch = useDispatch();

  return (
    <View>
      <Modal
        isVisible={visible}
        swipeDirection="down"
        style={{margin: 0}}
        backdropOpacity={0.3}
        style={{
          justifyContent: 'flex-end',
          margin: 0,
          flex: 1,
        }}>
        <View
          style={{
            flex: 0.6,
            backgroundColor: COLORS['white-default'],
            justifyContent: 'center',
            borderTopLeftRadius: 32,
            borderTopRightRadius: 32,
            padding: 30,
          }}>
          <Label color="gray-800" variant="h3">
            Adicionar cartão
          </Label>

          <View style={{padding: 10}} />

          <TextInput
            label="Nome do titular"
            onChangeText={text => console.log(text)}
          />

          <View style={{padding: 10}} />

          <TextInput
            label="Número do cartão"
            onChangeText={text => console.log(text)}
          />

          <View style={{padding: 10}} />

          <StyledContainer direction="row" justify="space-between">
            <StyledContainer width={46}>
              <TextInput
                label="Data de Vencimento"
                onChangeText={text => console.log(text)}
              />
            </StyledContainer>

            <StyledContainer width={46}>
              <TextInput label="cvv" onChangeText={text => console.log(text)} />
            </StyledContainer>
          </StyledContainer>

          <View style={{padding: 10}} />

          <Button onPress={() => dispatch(closeModalAddCart())}>
            Adicionar Cartão
          </Button>
        </View>
      </Modal>
    </View>
  );
}
