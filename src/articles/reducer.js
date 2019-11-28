import { handleActions } from 'redux-actions';

const initState = {
  all: {
    'test-article': {
      title: 'Article Title',
      slug: 'test-article',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi' +
        ' ista probare, quae sunt a te dicta? Refert tamen, quo modo. Lorem ipsum dolor sit amet,' +
        ' consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt' +
        ' a te dicta? Refert tamen, quo modo. Lorem ipsum dolor sit amet, consectetur adipiscing' +
        ' elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,' +
        ' quo modo.',
      createdAt: '2019-11-26T18:31:33.645Z',
      updatedAt: '2019-11-26T18:31:33.645Z',
      tagList: ['tag1', 'tag2', 'tag3'],
      description: 'Article Description',
      favorited: false,
      favoritesCount: 0,
      author: {
        username: 'Vovka',
        bio: null,
        image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
        following: false,
      },
    },
  },
  isLoading: true,
  error: null,
};

const articles = handleActions(
  {
    GET_ARTICLES_REQUEST: state => {
      return { ...state, isLoading: true, error: null };
    },
    GET_ARTICLES_SUCCESS: (state, { payload }) => {
      const articlesObject = payload.articles.reduce((acc, article) => {
        acc[article.slug] = article;
        return acc;
      }, {});
      return { isLoading: false, error: null, all: articlesObject };
    },
    GET_ARTICLES_FAILURE: (state, { payload: { response } }) => {
      return { ...state, error: response.data, isLoading: false };
    },
    FAVORITE_ARTICLE_REQUEST: state => {
      return state;
    },
    FAVORITE_ARTICLE_SUCCESS: (state, { payload: { article } }) => {
      return { ...state, [article.slug]: article };
    },
    FAVORITE_ARTICLE_FAILURE: (state, { payload: { err } }) => {
      return { ...state, isLoading: false, error: err.status };
    },
    CLEAR_ARTICLES_ERROR: state => {
      return { ...state, isLoading: false, error: null };
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
