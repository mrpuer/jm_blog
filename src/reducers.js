import { combineReducers } from 'redux';
import articles from './articles/reducer';
import user from './reducers/userReducer';

export default combineReducers({ articles, user });
