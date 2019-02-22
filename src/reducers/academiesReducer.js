import actions from '../actions/mirrorActions';
import initialState from './initailState';

export default function academyReducer(state = initialState.academies, action) {
  switch (action.type) {
    case actions.LOAD_ACADEMIES_SUCCESS:
      return action.academies;
    case actions.LOAD_ACADEMY_SUCCESS:
      return action.academy;
    case actions.CREATE_ACADEMY_SUCCESS:
      return [
        ...state.filter(a => a.academyId !== action.academy.academyId).sort(academy => academy.name),
        Object.assign({}, action.academy)
      ];
    case actions.UPDATE_ACADEMY_SUCCESS:
      return [
        ...state.filter(academy => academy.academyId !== action.academy.academyId).sort(academy => academy.name),
        Object.assign({}, action.academy)
      ];
    case actions.DELETE_ACADEMY_SUCCESS: {
      return state.filter(academy => academy.academyId !== action.academy.academyId);
    }
    default:
      return state;
  }
}
