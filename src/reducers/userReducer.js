import { handleActions } from 'redux-actions';

const initState = {
  user: {},
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
      ...state,
    }),
    // USER_REGISTER_FAILURE: (state, { payload }) => {},
    USER_LOGOUT: () => initState,
  },
  initState
);

export default userReducer;
