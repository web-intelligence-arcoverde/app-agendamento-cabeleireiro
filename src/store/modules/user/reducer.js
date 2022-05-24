import types from './types';
import produce from 'immer';

const INITIAL_STATE = {
  visible_modal_success_create_schedule: false,
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.CREATE_SCHEDULE_REQUEST: {
      return produce(state, draft => {
        draft.visible_modal_success_create_schedule = true;
      });
    }

    case types.CLOSE_MODAL_SUCCESS_CREATE_SCHEDULE: {
      return produce(state, draft => {
        draft.visible_modal_success_create_schedule = false;
      });
    }

    default:
      return state;
  }
}

export default user;
