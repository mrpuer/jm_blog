import { createAction } from 'redux-actions';
import service from '../services';
import { setError } from '../errors/actions';

export const getArticlesRequest = createAction('GET_ARTICLES_REQUEST');
export const getArticlesSuccess = createAction('GET_ARTICLES_SUCCESS');
export const getArticlesFailure = createAction('GET_ARTICLES_FAILURE');

export const getArticlesAction = params => async dispatch => {
  dispatch(getArticlesRequest());
  try {
    const articlesData = await service.getArticles(params);
    dispatch(getArticlesSuccess({ articlesData }));
  } catch (err) {
    dispatch(getArticlesFailure());
    dispatch(setError({ err }));
  }
};
