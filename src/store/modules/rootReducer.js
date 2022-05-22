import {combineReducers} from 'redux';

import user from './user/reducer';

import navigation from './navigation/reducer';

import purchase from './pruchase/reducer';

export default combineReducers({
  user,
  navigation,
  purchase,
});
