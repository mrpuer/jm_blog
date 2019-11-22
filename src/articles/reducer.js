import { handleActions } from 'redux-actions';
import _ from 'lodash';

const initState = [];

const articles = handleActions(
  {
    GET_ARTICLES_REQUEST: () => {
      console.log('request');
    },
    GET_ARTICLES_SUCCESS: (state, { payload }) => {
      return payload.articles;
    },
    GET_ARTICLES_FAILURE: () => {
      console.log('fail');
    },
    FAVORITE_ARTICLE_REQUEST: () => {
      console.log('request');
    },
    FAVORITE_ARTICLE_SUCCESS: (state, { payload: { article } }) => {
      const newState = _.remove(state, { slug: article.slug });
      console.log(newState);
      newState.push(article);
      return newState;
    },
    FAVORITE_ARTICLE_FAILURE: () => {
      console.log('fail');
    },
  },
  initState
);

export default articles;
