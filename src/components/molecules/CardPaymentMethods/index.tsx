import React from 'react';
import {View} from 'react-native';
import {ContainerCardPaymentMethods} from './style';
import {StyledContainer} from '../../atoms/Container';
import Icon from '../../atoms/Icon';
import Label from '../../atoms/Label';

import ContainerTicketBarCode from '../../organisms/ContainerTicketBarCode/index';
import ContainerCardPayment from '../../organisms/ContainerCardPayment';
import ContainerQrCodePix from '../../organisms/ContainerQrCodePix';
import {useDispatch} from 'react-redux';
import {
  openModalAddCart,
  openModalQrCodePix,
  openModalTicket,
} from '../../../store/modules/pruchase/actions';

const CardPaymentMethod = ({icon, text, selected, changerSelected}) => {
  const dispatch = useDispatch();

  const openModal = () => {
    if (text === 'PIX') {
      dispatch(openModalQrCodePix());
    } else if (text === 'Boleto') {
      dispatch(openModalTicket());
    } else if (text === 'Cartão') {
      dispatch(openModalAddCart());
    }
  };

  return (
    <ContainerCardPaymentMethods
      onPress={() => {
        changerSelected(text);
        openModal();
      }}>
      <>
        <StyledContainer
          width={100}
          color={selected ? 'green-default' : 'white-light'}
          radius={6}
          padding={24}
          justify="center"
          align="center">
          <Icon icon={icon} width={30} height={30} />
          <View style={{padding: 4}} />
          <Label
            color={selected ? 'white-default' : 'gray-800'}
            variant="body2">
            {text}
          </Label>
        </StyledContainer>

        <ContainerTicketBarCode />
        <ContainerCardPayment />
        <ContainerQrCodePix />
      </>
    </ContainerCardPaymentMethods>
  );
};

export default CardPaymentMethod;
