import { createAction } from 'redux-actions';

export const onLogin = createAction('LOGIN_USER', data => ({ data }));
export const onRegister = createAction('REGISTER_USER', newUser => ({ newUser }));
