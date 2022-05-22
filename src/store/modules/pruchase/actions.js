import types from './types';

export function openModalQrCodePix() {
  return {type: types.OPEN_MODAL_QR_CODE_PIX};
}

export function closeModalQrCodePix() {
  return {type: types.CLOSE_MODAL_QR_CODE_PIX};
}

export function openModalAddCart() {
  return {type: types.OPEN_MODAL_ADD_CARD};
}

export function closeModalAddCart() {
  return {type: types.CLOSE_MODAL_ADD_CARD};
}

export function addCardRequest(card) {
  return {type: types.ADD_CARD_REQUEST, card};
}

export function addCardSuccess(card) {
  return {type: types.ADD_CARD_SUCCESS, card};
}

export function openModalTicket() {
  return {type: types.OPEN_MODAL_TICKET};
}

export function closeModalTicket() {
  return {type: types.CLOSE_MODAL_TICKET};
}
