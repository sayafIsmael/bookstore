import { combineReducers } from 'redux';
import postReducer from './postReducer';
import bookReducer from './bookReducer';

export default combineReducers({
  posts: postReducer,
  books: bookReducer
});