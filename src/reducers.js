import { combineReducers } from 'redux';
import articles from './articles/reducer';
import user from './forms/userReducer';
import currentArticle from './article/reducer';
import error from './errors/reducer';
import currentProfile from './profile/reducer';

export default combineReducers({ articles, user, currentArticle, error, currentProfile });
