/* combined reducers */
import { combineReducers } from 'redux';
import academies from './academiesReducer';
import students from './studentReducer';
import ranks from './rankReducer';
import statuses from './statusReducer';

const rootReducer = combineReducers({
  academies,
  statuses,
  students,
  ranks
});

export default rootReducer;
