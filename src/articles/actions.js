import { createAction } from 'redux-actions';
import service from '../services';
import { POSTS_PER_PAGE } from './constants';

const getArticlesRequest = createAction('GET_ARTICLES_REQUEST');
const getArticlesSuccess = createAction('GET_ARTICLES_SUCCESS');
const getArticlesFailure = createAction('GET_ARTICLES_FAILURE');

const favoriteArticleRequest = createAction('FAVORITE_ARTICLE_REQUEST');
const favoriteArticleSuccess = createAction('FAVORITE_ARTICLE_SUCCESS');
const favoriteArticleFailure = createAction('FAVORITE_ARTICLE_FAILURE');

export const getArticlesAction = ({
  page = 1,
  tag = '',
  author = '',
  favorited = '',
}) => async dispatch => {
  dispatch(getArticlesRequest);
  try {
    const filters = {
      limit: POSTS_PER_PAGE,
      offset: page * POSTS_PER_PAGE,
      tag,
      author,
      favorited,
    };
    const articles = await service.getArticles(filters);
    dispatch(getArticlesSuccess({ articles }));
  } catch (err) {
    console.log(err);
    dispatch(getArticlesFailure);
  }
};

export const favoriteArticleAction = slug => async dispatch => {
  dispatch(favoriteArticleRequest);
  try {
    const article = await service.getArticles(slug);
    dispatch(favoriteArticleSuccess({ article }));
  } catch (err) {
    console.log(err.data);
    dispatch(favoriteArticleFailure);
  }
};
