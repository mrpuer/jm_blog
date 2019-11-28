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
      image: 'https://i.stack.imgur.com/xHWG8.jpg',
      following: false,
    },
  },
  isLoading: false,
  error: null,
};

const currentArticle = handleActions(
  {
    GET_ARTICLE_REQUEST: state => {
      return { ...state, isLoading: true, error: null };
    },
    GET_ARTICLE_SUCCESS: (state, { payload }) => {
      return { isLoading: false, error: null, data: payload.article };
    },
    GET_ARTICLE_FAILURE: (state, { payload: { err } }) => {
      return { ...state, error: err.data, isLoading: false };
    },
  },
  initState
);

export default currentArticle;
