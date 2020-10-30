import { combineReducers } from 'redux';
import list from './list.reducer';
import profile from './profile.reducer';
import contact from './contact.reducer';

export default () => combineReducers({
  list,
  profile,
  contact,
});