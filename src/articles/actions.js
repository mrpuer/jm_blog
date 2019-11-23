import { createAction } from 'redux-actions';
import service from '../services';
import { POSTS_PER_PAGE } from './constants';

export const getArticlesRequest = createAction('GET_ARTICLES_REQUEST');
export const getArticlesSuccess = createAction('GET_ARTICLES_SUCCESS');
export const getArticlesFailure = createAction('GET_ARTICLES_FAILURE');

export const favoriteArticleRequest = createAction('FAVORITE_ARTICLE_REQUEST');
export const favoriteArticleSuccess = createAction('FAVORITE_ARTICLE_SUCCESS');
export const favoriteArticleFailure = createAction('FAVORITE_ARTICLE_FAILURE');

export const getArticlesAction = ({
  page = 1,
  tag = '',
  author = '',
  favorited = '',
}) => async dispatch => {
  dispatch(getArticlesRequest());
  try {
    const filters = {
      limit: POSTS_PER_PAGE,
      offset: (page - 1) * POSTS_PER_PAGE,
      tag,
      author,
      favorited,
    };
    const articles = await service.getArticles(filters);
    console.log(articles);
    dispatch(getArticlesSuccess({ articles }));
  } catch (err) {
    console.log(err);
    dispatch(getArticlesFailure());
  }
};

export const favoriteArticleAction = slug => async dispatch => {
  console.log(slug);
  dispatch(favoriteArticleRequest());
  try {
    const article = await service.favoriteArticle(slug);
    dispatch(favoriteArticleSuccess({ article }));
  } catch (err) {
    dispatch(favoriteArticleFailure());
  }
};
