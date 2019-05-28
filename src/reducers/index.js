import { combineReducers } from 'redux';
import ProgramReducer from './reducer_programs';
import RecentlyProgramReducer from './reducer_recently_programs';

const rootReducer = combineReducers({
  programs : ProgramReducer,
  recently_programs: RecentlyProgramReducer,
});

export default rootReducer;
