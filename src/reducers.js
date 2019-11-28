import { combineReducers } from 'redux';
import articles from './articles/reducer';
import user from './reducers/userReducer';
import currentArticle from './article/reducer';
import error from './errors/reducer';

export default combineReducers({ articles, user, currentArticle, error });
