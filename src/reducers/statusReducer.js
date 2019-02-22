import actions from '../actions/mirrorActions';
import initialState from './initailState';

export default function studentStatusReducer(state = initialState.statuses, action) {
  switch (action.type) {
    case actions.LOAD_STATUSES_SUCCESS:
      return action.statuses;
    case actions.CREATE_STATUS_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.status)
      ];
    case actions.UPDATE_STATUS_SUCCESS:
      return [
        ...state.filter(status => status.studentStatusId !== action.status.studentStatusId),
        Object.assign({}, action.status)
      ];
    default:
      return state;
  }
}
