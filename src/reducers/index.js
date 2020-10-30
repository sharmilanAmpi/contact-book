import { combineReducers } from 'redux';
import list from './list.reducer';
import profile from './profile.reducer';

export default () => combineReducers({
  list,
  profile,
});