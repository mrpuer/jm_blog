import { createAction } from 'redux-actions';
import RealworldService from '../services/RealworldService';
import { setError } from '../errors/actions';
// import TestService from '../services/TestService';

const service = new RealworldService();
// const service = new TestService();

const userRegisterRequest = createAction('USER_REGISTER_REQUEST');
const userRegisterSuccess = createAction('USER_REGISTER_SUCCESS');
// const userRegisterFailure = createAction('USER_REGISTER_FAILURE');

const userLoginRequest = createAction('USER_LOGIN_REQUEST');
const userLoginSuccess = createAction('USER_LOGIN_SUCCESS');

const userLogout = createAction('USER_LOGOUT');

export const onRegister = formData => async dispatch => {
  dispatch(userRegisterRequest());
  const newUser = await service.register(formData);
  // localStorage.setItem('token', newUser.token);
  dispatch(userRegisterSuccess({ newUser }));
};

export const onLogin = loginData => async dispatch => {
  dispatch(userLoginRequest());
  try {
    const user = await service.login(loginData);
    // localStorage.setItem('token', user.token);
    dispatch(userLoginSuccess({ user }));
  } catch (err) {
    dispatch(setError({ err }));
  }
};

export const onLogout = () => async dispatch => {
  localStorage.removeItem('token');
  dispatch(userLogout);
};
