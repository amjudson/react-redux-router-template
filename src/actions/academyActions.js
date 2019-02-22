import action from './mirrorActions';
import AcademyApi from '../api/academyApi';
// import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function loadAcademiesSuccess(academies) {
  return {
    type: action.LOAD_ACADEMIES_SUCCESS,
    academies
  };
}

export function loadAcademiesFailed(message) {
  return {
    type: action.LOAD_ACADEMIES_FAILED,
    message
  };
}

export function loadAcademySuccess(academy) {
  return {
    type: action.LOAD_ACADEMY_SUCCESS,
    academy
  };
}

export function loadAcademyFailed(message) {
  return {
    type: action.LOAD_ACADEMY_FAILED,
    message
  };
}

export function createAcademySuccess(academy) {
  return {
    type: action.CREATE_ACADEMY_SUCCESS,
    academy
  };
}

export function createAcademyFailed(message) {
  return {
    type: action.CREATE_ACADEMY_FAILED,
    message
  };
}

export function updateAcademySuccess(academy) {
  return {
    type: action.UPDATE_ACADEMY_SUCCESS,
    academy
  };
}

export function updateAcademyFailed(message) {
  return {
    type: action.UPDATE_ACADEMY_FAILED,
    message
  };
}

export function deleteAcademySuccess(academy) {
  return {
    type: action.DELETE_ACADEMY_SUCCESS,
    academy
  };
}

export function deleteAcademyFailed(message) {
  return {
    type: action.DELETE_ACADEMY_FAILED,
    message
  };
}

export function loadAcademies() {
  let academies = [];
  return function (dispatch) {
    // dispatch(beginAjaxCall());
    try {
      return AcademyApi.getAllAcademies().then(academies => {
        dispatch(loadAcademiesSuccess(academies));
      });
    } catch (error) {
      return dispatch(loadAcademiesFailed(error.message));
    }
  };
}

export function loadAcademy(academyId) {
  return function (dispatch) {
    // dispatch(beginAjaxCall());
    try {
      return AcademyApi.getAcademyById(academyId).then(academy => {
        dispatch(loadAcademySuccess(academy));
      });
    } catch (error) {
      return dispatch(loadAcademyFailed(error));
    }
  };
}

export function saveAcademy(academy) {
  return function (dispatch, getState) {
    // dispatch(beginAjaxCall());
    try {
      return AcademyApi.saveAcademy(academy).then(savedAcademy => {
        academy.academyId ? dispatch(updateAcademySuccess(savedAcademy)) :
          dispatch(createAcademySuccess(savedAcademy));
      });
    } catch (error) {
      // dispatch(ajaxCallError(error));
      return academy.academyId ? dispatch(updateAcademyFailed(error.message)) :
        dispatch(createAcademyFailed(error.message));
    }
  };
}

export function deleteAcademy(academy) {
  return function (dispatch, getState) {
    // dispatch(beginAjaxCall());
    try {
      return AcademyApi.deleteAcademy(academy).then(deletedAcademy => {
        dispatch(deleteAcademySuccess(academy));
      });
    } catch (error) {
      // dispatch(ajaxCallError(error));
      return dispatch(deleteAcademyFailed(error.message));
    }
  };
}
