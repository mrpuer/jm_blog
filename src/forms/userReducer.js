import { handleActions } from 'redux-actions';
import { message } from 'antd';

const initState = {
  user: { token: localStorage.getItem('token') || '' },
  isLogged: false,
};

const userReducer = handleActions(
  {
    // USER_LOGIN_REQUEST: (state, { payload }) => {},
    USER_LOGIN_SUCCESS: (state, { payload }) => {
      return { user: payload.user, isLogged: true };
    },
    // USER_LOGIN_FAILURE: (state, { payload }) => {},
    // USER_REGISTER_REQUEST: (state, { payload }) => {},
    USER_REGISTER_SUCCESS: (state, { payload }) => ({
      user: payload.newUser,
      isLogged: true,
    }),
    // USER_REGISTER_FAILURE: (state, { payload }) => {},
    USER_LOGOUT: () => {
      message.success('Logout successful!');
      return initState;
    },
  },
  initState
);

export default userReducer;
