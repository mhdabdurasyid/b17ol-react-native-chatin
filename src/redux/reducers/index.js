import {combineReducers} from 'redux';

import auth from './auth';
import profile from './profile';
import friend from './friend';

export default combineReducers({
  auth,
  profile,
  friend,
});
