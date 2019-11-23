import { handleActions } from 'redux-actions';
import * as actions from './actions';

const initState = {};

// const articles = handleActions(
//   {
//     GET_ARTICLES_REQUEST: (state, { payload }) => {
//       console.log('req');
//       return state;
//     },
//     GET_ARTICLES_SUCCESS: (state, { payload }) => {
//       console.log(payload);
//       return payload.articles.reduce((acc, article) => {
//         acc[article.slug] = article;
//         return acc;
//       }, {});
//     },
//     GET_ARTICLES_FAILURE: (state, { payload }) => {
//       console.log('fail');
//       return state;
//     },
//     FAVORITE_ARTICLE_REQUEST: (state, { payload }) => {
//       console.log('req');
//       return state;
//     },
//     FAVORITE_ARTICLE_SUCCESS: (state, { payload: { article } }) => {
//       return { [article.slug]: article, ...state };
//     },
//     FAVORITE_ARTICLE_FAILURE: (state, { payload }) => {
//       console.log('fail');
//       return state;
//     },
//   },
//   initState
// );

const articles = handleActions(
  {
    [actions.getArticlesRequest](state) {
      console.log('req');
      return state;
    },
    [actions.getArticlesSuccess](state, { payload }) {
      console.log(payload);
      return payload.articles.reduce((acc, article) => {
        acc[article.slug] = article;
        return acc;
      }, {});
    },
    [actions.getArticlesFailure](state) {
      console.log('fail');
      return state;
    },
    [actions.favoriteArticleRequest](state) {
      console.log('req');
      return state;
    },
    [actions.favoriteArticleSuccess](state, { payload: { article } }) {
      return { [article.slug]: article, ...state };
    },
    [actions.favoriteArticleFailure](state) {
      console.log('fail');
      return state;
    },
  },
  initState
);

export default articles;
