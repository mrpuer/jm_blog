import { createAction } from 'redux-actions';
import service from '../services';
import { setError } from '../errors/actions';

export const getArticlesRequest = createAction('GET_ARTICLES_REQUEST');
export const getArticlesSuccess = createAction('GET_ARTICLES_SUCCESS');
export const getArticlesFailure = createAction('GET_ARTICLES_FAILURE');

export const favoriteArticleRequest = createAction('FAVORITE_ARTICLE_REQUEST');
export const favoriteArticleSuccess = createAction('FAVORITE_ARTICLE_SUCCESS');
export const favoriteArticleFailure = createAction('FAVORITE_ARTICLE_FAILURE');

export const getArticlesAction = params => async dispatch => {
  dispatch(getArticlesRequest());
  try {
    const articles = await service.getArticles(params);
    dispatch(getArticlesSuccess({ articles }));
  } catch (err) {
    dispatch(getArticlesFailure());
    dispatch(setError({ err }));
  }
};
