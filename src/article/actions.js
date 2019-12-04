import { createAction } from 'redux-actions';
import service from '../services';
import { setError } from '../errors/actions';
import { favoriteArticleRequest, favoriteArticleSuccess } from '../articles/actions';

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
    dispatch(setError({ err }));
  }
};

// eslint-disable-next-line consistent-return
export const addArticleAction = newArticle => async dispatch => {
  dispatch(getArticleRequest());
  try {
    const article = await service.addArticle(newArticle);
    dispatch(getArticleSuccess({ article }));
    return article;
  } catch (err) {
    dispatch(getArticleFailure());
    dispatch(setError({ err }));
  }
};

// eslint-disable-next-line consistent-return
export const editArticleAction = newData => async dispatch => {
  dispatch(getArticleRequest());
  try {
    const article = await service.editArticle(newData);
    dispatch(getArticleSuccess({ article }));
    return article;
  } catch (err) {
    dispatch(getArticleFailure());
    dispatch(setError({ err }));
  }
};

export const favoriteArticleAction = slug => async dispatch => {
  dispatch(favoriteArticleRequest());
  try {
    const article = await service.favoriteArticle(slug);
    dispatch(favoriteArticleSuccess({ article }));
  } catch (err) {
    dispatch(setError({ err }));
  }
};

export const deleteArticleAction = slug => async dispatch => {
  dispatch(getArticleRequest());
  try {
    const article = await service.deleteArticle(slug);
    dispatch(getArticleSuccess({ article }));
  } catch (err) {
    dispatch(getArticleFailure());
    dispatch(setError({ err }));
  }
};
