import { combineReducers } from 'redux';
// import { authReducer } from './authReducer';
// import { searchReducer } from './searchReducer';
import { default as authReducer } from './authReducer';
import { default as searchReducer } from './searchReducer';

export default combineReducers({
  authReducer,
  searchReducer,
});
