import React from 'react';
import {COLORS} from '../../../common';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import Label from '../../atoms/Label';

import Button from '../../atoms/Button/Contained';

import QRCode from 'react-native-qrcode-svg';
import {StyledContainer} from '../../atoms/Container';

import {useDispatch, useSelector} from 'react-redux';
import {
  closeModalQrCodePix,
  openModalQrCodePix,
} from '../../../store/modules/pruchase/actions';

export default function ContainerBarCode() {
  const pixCode = '111.185.464-58';

  const visible = useSelector(state => state.purchase.visible_modal_pix);
  const dispatch = useDispatch();

  const close = () => {
    dispatch(closeModalQrCodePix());
  };

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
            flex: 0.5,
            backgroundColor: COLORS['white-default'],
            justifyContent: 'center',
            borderTopLeftRadius: 32,
            borderTopRightRadius: 32,
            padding: 30,
          }}>
          <Label color="gray-800" variant="h3">
            QrCode
          </Label>

          <View style={{padding: 14}} />

          <StyledContainer justify="center" align="center">
            <QRCode
              value={pixCode}
              size={180}
              color="black"
              backgroundColor="white"
              logoSize={30}
              logoMargin={2}
              logoBorderRadius={15}
              logoBackgroundColor="yellow"
            />
            <View style={{padding: 6}} />
            <Label color="gray-800" variant="body1">
              {pixCode}
            </Label>
          </StyledContainer>

          <View style={{padding: 20}} />

          <Button onPress={close}>Copiar chave</Button>
        </View>
      </Modal>
    </View>
  );
}
