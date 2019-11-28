import { createAction } from 'redux-actions';
import service from '../services';

export const getArticleRequest = createAction('GET_ARTICLE_REQUEST');
export const getArticleSuccess = createAction('GET_ARTICLE_SUCCESS');
export const getArticleFailure = createAction('GET_ARTICLE_FAILURE');

export const getArticleAction = slug => async dispatch => {
  dispatch(getArticleRequest());
  try {
    const article = await service.getArticle(slug);
    dispatch(getArticleSuccess({ article }));
  } catch (err) {
    dispatch(getArticleFailure({ err: err.response }));
  }
};
