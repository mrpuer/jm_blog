import { createAction } from 'redux-actions';

export const clearError = createAction('CLEAR_ERROR');
export const setError = createAction('SET_ERROR');

export const clearErrorAction = () => dispatch => {
  dispatch(clearError());
};

export const setErrorAction = err => dispatch => {
  dispatch(setError({ err }));
};
