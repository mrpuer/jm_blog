import { handleActions } from 'redux-actions';
import RealworldService from '../services/RealworldService';

const service = new RealworldService();

const initState = {
  user: {},
  isLogged: false,
};

const userReducer = handleActions(
  {
    LOGIN_USER: (state, { payload }) => {
      return service.login(payload.loginData);
    },
    REGISTER_USER: (state, { payload }) => {
      return service.login(payload.newUser);
    },
  },
  initState
);

export default userReducer;
