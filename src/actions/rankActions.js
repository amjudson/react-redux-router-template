import RankApi from '../api/rankApi';
import action from './mirrorActions';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function loadRanksSuccess(ranks) {
  return {
    type: action.LOAD_RANKS_SUCCESS,
    ranks
  };
}

export function loadRanksFailed(message) {
  return {
    type: action.LOAD_RANKS_FAILED,
    message
  };
}

export function loadRankSuccess(rank) {
  return {
    type: action.LOAD_RANK_SUCCESS,
    rank
  };
}

export function loadRankFailed(message) {
  return {
    type: action.LOAD_RANK_FAILED,
    message
  };
}

export function createRankSuccess(rank) {
  return {
    type: action.CREATE_RANK_SUCCESS,
    rank
  };
}

export function createRankFailed(message) {
  return {
    type: action.CREATE_RANK_FAILED,
    message
  };
}

export function updateRankSuccess(rank) {
  return {
    type: action.UPDATE_RANK_SUCCESS,
    rank
  };
}

export function updateRankFailed(message) {
  return {
    type: action.UPDATE_RANK_FAILED,
    message
  };
}

export function deleteRankSuccess(rank) {
  return {
    type: action.DELETE_RANK_SUCCESS,
    rank
  };
}

export function deleteRankFailed(message) {
  return {
    type: action.DELETE_RANK_FAILED,
    message
  };
}

export function loadRanks() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return RankApi.getAllRanks().then(ranks => {
      dispatch(loadRanksSuccess(ranks));
    }).catch(error => {
      dispatch(loadRanksFailed(error));
    });
  };
}

export function loadRank(rankId) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    try {
      return RankApi.getRankById(rankId).then(rank => {
        dispatch(loadRankSuccess(rank));
      });
    } catch (error) {
      return dispatch(loadRankFailed(error));
    }
  };
}

export function saveRank(rank) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    try {
      return RankApi.saveRank(rank).then(savedRank => {
        rank.rankId ? dispatch(updateRankSuccess(savedRank)) :
          dispatch(createRankSuccess(savedRank));
      });
    } catch (error) {
      dispatch(ajaxCallError(error));
      return rank.rankId ? dispatch(updateRankFailed(error.message)) :
        dispatch(createRankFailed(error.message));
    }
  };
}

export function deleteRank(rank) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    try {
      return RankApi.deleteRank(rank).then(deletedRank => {
        dispatch(deleteRankSuccess(rank));
      });
    } catch (error) {
      dispatch(ajaxCallError(error));
      return dispatch(deleteRankFailed(error.message));
    }
  };
}
