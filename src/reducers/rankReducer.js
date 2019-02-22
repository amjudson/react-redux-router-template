import actions from '../actions/mirrorActions';
import initialState from './initailState';

export default function rankReducer(state = initialState.ranks, action) {
  switch (action.type) {
    case actions.LOAD_RANKS_SUCCESS:
      return action.ranks; //.sort((rank1, rank2) => rank1.rankId.localeCompare(rank2.rankId));
    case actions.LOAD_RANK_SUCCESS:
      return action.rank;
    case actions.CREATE_RANK_SUCCESS:
      return [
        ...state.filter(a => a.rankId !== action.rank.rankId).sort(rank => rank.name),
        Object.assign({}, action.rank)
      ];
    case actions.UPDATE_RANK_SUCCESS:
      return [
        ...state.filter(rank => rank.rankId !== action.rank.rankId).sort(rank => rank.name),
        Object.assign({}, action.rank)
      ];
    case actions.DELETE_RANK_SUCCESS: {
      return state.filter(rank => rank.rankId !== action.rank.rankId);
    }
    default:
      return state;
  }
}
