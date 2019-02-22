import action from './mirrorActions';
import StatusApi from '../api/statusApi';
import {
  beginAjaxCall,
  ajaxCallError
} from './ajaxStatusActions';

export function loadStatusesSucceses(statuses) {
  return {
    type: action.LOAD_STATUSES_SUCCESS,
    statuses
  };
}

export function loadStatusesFailed(message) {
  return {
    type: action.LOAD_STATUSES_FAILED,
    message
  };
}

export function createStatusSucces(status) {
  return {
    type: action.CREATE_STATUS_SUCCESS,
    status
  };
}

export function createStatusFailed(message) {
  return {
    type: action.CREATE_STATUS_FAILED,
    message
  };
}

export function updateStatusSuccess(status) {
  return {
    type: action.UPDATE_STATUS_SUCCESS,
    status
  };
}

export function updateStatusFailed(message) {
  return {
    type: action.UPDATE_STATUS_FAILED,
    message
  };
}

export function deleteStatusSuccess(status) {
  return {
    type: action.DELETE_STATUS_SUCCESS,
    status
  };
}

export function deleteStatusFailed(message) {
  return {
    type: action.DELETE_STATUS_FAILED,
    message
  };
}

export function loadStatuses() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    try {
      return StatusApi.getAllStatuses().then(statuses => {
        dispatch(loadStatusesSucceses(statuses));
      });
    } catch (error) {
      console.error('ERROR:', error.message); // eslint-disable-line no-console
      return dispatch(loadStatusesFailed(error.message));
    }
  };
}

export function saveStatus(status) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    try {
      return StatusApi.saveStatus(status).then(savedStatus => {
        status.statusId ? dispatch(updateStatusSuccess(savedStatus)) :
          dispatch(createStatusSucces(savedStatus));
      });
    } catch (error) {
      dispatch(ajaxCallError(error));
      return status.statusId ? dispatch(updateStatusFailed(error.message)) :
        dispatch(createStatusFailed(error.message));
    }
  };
}

export function deleteAcademy(status) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    try {
      return StatusApi.deleteAcademy(status).then(deletedStatus => {
        dispatch(deleteStatusSuccess(status));
      });
    } catch (error) {
      dispatch(ajaxCallError(error));
      return dispatch(deleteStatusFailed(error.message));
    }
  };
}
