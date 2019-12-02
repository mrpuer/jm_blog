import { handleActions } from 'redux-actions';
import { message } from 'antd';

const initState = {
  email: '',
  token: localStorage.getItem('token') || null,
  username: '',
  bio: '',
  image: null,
  isLoading: false,
  isLogged: false,
};

const userReducer = handleActions(
  {
    USER_LOGIN_REQUEST: state => {
      return { ...state, isLogged: false, isLoading: true };
    },
    USER_LOGIN_SUCCESS: (state, { payload }) => {
      return { ...payload.user, isLogged: true, isLoading: false };
    },
    USER_LOGIN_FAILURE: state => {
      return { ...state, isLogged: false, isLoading: false };
    },
    USER_REGISTER_REQUEST: state => {
      return { ...state, isLogged: false, isLoading: true };
    },
    USER_REGISTER_SUCCESS: (state, { payload }) => ({
      user: payload.newUser,
      isLogged: true,
      isLoading: false,
    }),
    USER_REGISTER_FAILURE: state => ({
      ...state,
      isLogged: false,
      isLoading: false,
    }),
    USER_LOGOUT: () => {
      message.success('Logout successful!');
      return initState;
    },
  },
  initState
);

export default userReducer;