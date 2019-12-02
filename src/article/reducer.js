import { handleActions } from 'redux-actions';

const initState = {
  data: {
    slug: '',
    title: '',
    description: '',
    body: '',
    tagList: [],
    createdAt: '2016-02-18T03:22:56.637Z',
    updatedAt: '2016-02-18T03:22:56.637Z',
    favorited: false,
    favoritesCount: 0,
    author: {
      username: '',
      bio: '',
      image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
      following: false,
    },
  },
  isLoading: false,
};

const currentArticle = handleActions(
  {
    GET_ARTICLE_REQUEST: state => {
      return { ...state, isLoading: true };
    },
    GET_ARTICLE_SUCCESS: (state, { payload }) => {
      return { isLoading: false, data: payload.article };
    },
    GET_ARTICLE_FAILURE: state => {
      return { ...state, isLoading: false };
    },
  },
  initState
);

export default currentArticle;
