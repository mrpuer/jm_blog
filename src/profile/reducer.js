import { handleActions } from 'redux-actions';

const initState = {
  username: '',
  bio: '',
  image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
  following: false,
  isLoading: false,
};

const currentProfile = handleActions(
  {
    GET_PROFILE_REQUEST: state => {
      return { ...state, isLoading: true };
    },
    GET_PROFILE_SUCCESS: (state, { payload }) => {
      return { ...payload.profile, isLoading: false };
    },
    GET_PROFILE_FAILURE: state => {
      return { ...state, isLoading: false };
    },
  },
  initState
);

export default currentProfile;
