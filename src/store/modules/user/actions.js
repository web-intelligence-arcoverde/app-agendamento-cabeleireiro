import types from './types';

export function openModalSuccessCreateSchedule() {
  return {type: types.OPEN_MODAL_SUCCESS_CREATE_SCHEDULE};
}

export function closeModalSuccessCreateSchedule() {
  return {type: types.CLOSE_MODAL_SUCCESS_CREATE_SCHEDULE};
}

export function createScheduleRequest(data) {
  return {type: types.CREATE_SCHEDULE_REQUEST, data};
}

export function createScheduleSuccess(data) {
  return {type: types.CREATE_SCHEDULE_SUCCESS, data};
}
