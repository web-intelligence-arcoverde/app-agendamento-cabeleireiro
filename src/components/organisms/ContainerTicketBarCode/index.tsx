import React from 'react';
import {COLORS} from '../../../common';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import Label from '../../atoms/Label';
import Barcode from '@kichiyaki/react-native-barcode-generator';
import {Dimensions} from 'react-native';
import Button from '../../atoms/Button/Contained';
import {useDispatch, useSelector} from 'react-redux';
import {closeModalTicket} from '../../../store/modules/pruchase/actions';

export default function ContainerBarCode() {
  const visible = useSelector(state => state.purchase.visible_modal_ticket);
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
            flex: 0.4,
            backgroundColor: COLORS['white-default'],
            justifyContent: 'center',
            borderTopLeftRadius: 32,
            borderTopRightRadius: 32,
            padding: 30,
          }}>
          <Label color="gray-800" variant="h3">
            Codigo de Barras
          </Label>

          <View style={{padding: 10}} />

          <Barcode
            format="codabar"
            value="0123456789012"
            text="0123456789012"
            style={{backgroundColor: COLORS['white-default']}}
            maxWidth={Dimensions.get('window').width}
          />

          <View style={{padding: 20}} />

          <Button onPress={() => dispatch(closeModalTicket())}>
            Copia código
          </Button>
        </View>
      </Modal>
    </View>
  );
}
