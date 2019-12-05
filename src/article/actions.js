import { createAction } from 'redux-actions';
import { message } from 'antd';
import service from '../services';
import { setError } from '../errors/actions';

const getArticleRequest = createAction('GET_ARTICLE_REQUEST');
const getArticleSuccess = createAction('GET_ARTICLE_SUCCESS');
const getArticleFailure = createAction('GET_ARTICLE_FAILURE');
const deleteArticleSuccess = createAction('DELETE_ARTICLE_SUCCESS');
const favoriteArticleSuccess = createAction('FAVORITE_ARTICLE_SUCCESS');

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

export const addArticleAction = newArticle => async dispatch => {
  dispatch(getArticleRequest());
  try {
    const article = await service.addArticle(newArticle);
    dispatch(getArticleSuccess({ article }));
    message.success('Article Added!');
    return article;
  } catch (err) {
    dispatch(getArticleFailure());
    dispatch(setError({ err }));
    return null;
  }
};

export const editArticleAction = newData => async dispatch => {
  dispatch(getArticleRequest());
  try {
    const article = await service.editArticle(newData);
    dispatch(getArticleSuccess({ article }));
    message.success('Article Edited!');
    return article;
  } catch (err) {
    dispatch(getArticleFailure());
    dispatch(setError({ err }));
    return null;
  }
};

export const favoriteArticleAction = (slug, isFavorited) => async dispatch => {
  dispatch(getArticleRequest());
  try {
    const article = isFavorited
      ? await service.unfavoriteArticle(slug)
      : await service.favoriteArticle(slug);
    dispatch(favoriteArticleSuccess({ article }));
    dispatch(getArticleSuccess({ article }));
    message.success(isFavorited ? 'You are unliked it!' : 'You are liked it!');
  } catch (err) {
    dispatch(getArticleFailure());
    dispatch(setError({ err }));
  }
};

export const deleteArticleAction = slug => async dispatch => {
  dispatch(getArticleRequest());
  try {
    await service.deleteArticle(slug);
    dispatch(deleteArticleSuccess());
    message.success('Article Deleted!');
    return true;
  } catch (err) {
    dispatch(getArticleFailure());
    dispatch(setError({ err }));
    return false;
  }
};
