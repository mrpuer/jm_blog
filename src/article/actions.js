import { createAction } from 'redux-actions';
import service from '../services';
import { setError } from '../errors/actions';

export const getArticleRequest = createAction('GET_ARTICLE_REQUEST');
export const getArticleSuccess = createAction('GET_ARTICLE_SUCCESS');
export const getArticleFailure = createAction('GET_ARTICLE_FAILURE');

export const getArticleAction = slug => async dispatch => {
  dispatch(getArticleRequest());
  try {
    const article = await service.getArticle(slug);
    dispatch(getArticleSuccess({ article }));
  } catch (err) {
    dispatch(getArticleFailure());
    dispatch(setError({ err: err.response }));
  }
};

export const addArticleAction = newArticle => async dispatch => {
  dispatch(getArticleRequest());
  try {
    const article = await service.addArticle(newArticle);
    dispatch(getArticleSuccess({ article }));
  } catch (err) {
    dispatch(getArticleFailure());
    dispatch(setError({ err: err.response }));
  }
};
