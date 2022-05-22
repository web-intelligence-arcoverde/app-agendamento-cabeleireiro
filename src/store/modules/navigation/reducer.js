import types from './types';
import produce from 'immer';

const INITIAL_STATE = {
  visible_modal_leave: false,
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.OPEN_MODAL_SIGN_OUT: {
      return produce(state, (draft) => {
        draft.visible_modal_leave = true;
      });
    }

    case types.CLOSE_MODAL_SIGN_OUT: {
      return produce(state, (draft) => {
        draft.visible_modal_leave = false;
      });
    }

    default:
      return state;
  }
}

export default user;
