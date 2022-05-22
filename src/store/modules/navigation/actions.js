import types from './types';

export function openModalSignOut() {
  return {type: types.OPEN_MODAL_SIGN_OUT};
}

export function closeModalSignOut() {
  return {type: types.CLOSE_MODAL_SIGN_OUT};
}
