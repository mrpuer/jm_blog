import { handleActions } from 'redux-actions';
// import RealworldService from '../services/RealworldService';
import TestService from '../services/TestService';

// const service = new RealworldService();
const service = new TestService();

const initState = {
  user: {},
  isLogged: false,
};

const userReducer = handleActions(
  {
    LOGIN_USER: (state, { payload }) => {
      const userData = service.login(payload.data);
      if (userData) return { user: userData, isLogged: true };
      return state;
    },
    REGISTER_USER: (state, { payload }) => {
      const newUser = service.register(payload.newUser);
      return { user: newUser, isLogged: true };
    },
  },
  initState
);

export default userReducer;
