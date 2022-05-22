import types from './types';
import produce from 'immer';

const INITIAL_STATE = {
  visible_modal_pix: false,
  visible_modal_card: false,
  visible_modal_ticket: false,

  card: {},
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.OPEN_MODAL_TICKET: {
      return produce(state, (draft) => {
        draft.visible_modal_ticket = true;
      });
    }

    case types.CLOSE_MODAL_TICKET: {
      return produce(state, (draft) => {
        draft.visible_modal_ticket = false;
      });
    }

    case types.OPEN_MODAL_QR_CODE_PIX: {
      return produce(state, (draft) => {
        draft.visible_modal_pix = true;
      });
    }

    case types.CLOSE_MODAL_QR_CODE_PIX: {
      return produce(state, (draft) => {
        draft.visible_modal_pix = false;
      });
    }

    case types.OPEN_MODAL_ADD_CARD: {
      return produce(state, (draft) => {
        draft.visible_modal_card = true;
      });
    }

    case types.CLOSE_MODAL_ADD_CARD: {
      return produce(state, (draft) => {
        draft.visible_modal_card = false;
      });
    }

    default:
      return state;
  }
}

export default user;
