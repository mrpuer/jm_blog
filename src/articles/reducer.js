import { handleActions } from 'redux-actions';

const initState = {
  all: {},
  loading: true,
  error: null,
};

const articles = handleActions(
  {
    GET_ARTICLES_REQUEST: state => {
      return { loading: true, error: null, ...state };
    },
    GET_ARTICLES_SUCCESS: (state, { payload }) => {
      const articlesObject = payload.articles.reduce((acc, article) => {
        acc[article.slug] = article;
        return acc;
      }, {});
      return { loading: false, error: null, all: articlesObject };
    },
    GET_ARTICLES_FAILURE: (state, { payload: { response } }) => {
      return { error: response.data, loading: false, ...state };
    },
    FAVORITE_ARTICLE_REQUEST: state => {
      console.log('req');
      return state;
    },
    FAVORITE_ARTICLE_SUCCESS: (state, { payload: { article } }) => {
      return { [article.slug]: article, ...state };
    },
    FAVORITE_ARTICLE_FAILURE: state => {
      return { error: 'i have error', ...state };
    },
  },
  initState
);

// const articles = handleActions(
//   {
//     [actions.getArticlesRequest](state) {
//       console.log('req');
//       return state;
//     },
//     [actions.getArticlesSuccess](state, { payload }) {
//       console.log(payload);
//       return payload.articles.reduce((acc, article) => {
//         acc[article.slug] = article;
//         return acc;
//       }, {});
//     },
//     [actions.getArticlesFailure](state) {
//       console.log('fail');
//       return state;
//     },
//     [actions.favoriteArticleRequest](state) {
//       console.log('req');
//       return state;
//     },
//     [actions.favoriteArticleSuccess](state, { payload: { article } }) {
//       return { [article.slug]: article, ...state };
//     },
//     [actions.favoriteArticleFailure](state) {
//       console.log('fail');
//       return state;
//     },
//   },
//   initState
// );

export default articles;
