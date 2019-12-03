import { createAction } from 'redux-actions';
import { message } from 'antd';
import RealworldService from '../services/RealworldService';
import { setError } from '../errors/actions';

const service = new RealworldService();

const userRegisterRequest = createAction('USER_REGISTER_REQUEST');
const userRegisterSuccess = createAction('USER_REGISTER_SUCCESS');
const userRegisterFailure = createAction('USER_REGISTER_FAILURE');

const userLoginRequest = createAction('USER_LOGIN_REQUEST');
const userLoginSuccess = createAction('USER_LOGIN_SUCCESS');
const userLoginFailure = createAction('USER_LOGIN_FAILURE');

const userLogout = createAction('USER_LOGOUT');

export const onRegister = formData => async dispatch => {
  dispatch(userRegisterRequest());
  try {
    const newUser = await service.register(formData);
    localStorage.setItem('token', newUser.token);
    dispatch(userRegisterSuccess({ newUser }));
  } catch (err) {
    dispatch(setError({ err }));
    dispatch(userRegisterFailure());
  }
};

export const onLogin = loginData => async dispatch => {
  dispatch(userLoginRequest());
  try {
    const user = await service.login(loginData);
    localStorage.setItem('token', user.token);
    dispatch(userLoginSuccess({ user }));
  } catch (err) {
    dispatch(setError({ err }));
    dispatch(userLoginFailure());
  }
};

export const onLogout = () => async dispatch => {
  localStorage.removeItem('token');
  dispatch(userLogout());
  message.success('Logout successful!');
};

export const getUser = token => async dispatch => {
  dispatch(userLoginRequest());
  try {
    const user = await service.getUser(token || localStorage.getItem('token'));
    dispatch(userLoginSuccess({ user }));
  } catch (err) {
    service.clearToken();
    dispatch(userLoginFailure());
  }
};
