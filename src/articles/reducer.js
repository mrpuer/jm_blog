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
      isLoading: false,
    },
  },
  isLoading: false,
};

const articles = handleActions(
  {
    GET_ARTICLES_REQUEST: state => {
      return { ...state, isLoading: true };
    },
    GET_ARTICLES_SUCCESS: (state, { payload }) => {
      const articlesObject = payload.articles.reduce((acc, article) => {
        return { ...acc, [article.slug]: { ...article, isLoading: false } };
      }, {});
      return { all: articlesObject, isLoading: false };
    },
    GET_ARTICLES_FAILURE: state => {
      return { ...state, isLoading: false };
    },
    FAVORITE_ARTICLE_REQUEST: (state, { payload: { article } }) => {
      return { ...state, [article.slug]: { ...article, isLoading: true } };
    },
    FAVORITE_ARTICLE_SUCCESS: (state, { payload: { article } }) => {
      return { ...state, [article.slug]: { ...article, isLoading: false } };
    },
    FAVORITE_ARTICLE_FAILURE: (state, { payload: { article } }) => {
      return { ...state, [article.slug]: { ...article, isLoading: false } };
    },
  },
  initState
);

export default articles;
