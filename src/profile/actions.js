import { createAction } from 'redux-actions';
import service from '../services';
import { setError } from '../errors/actions';

export const getProfileRequest = createAction('GET_PROFILE_REQUEST');
export const getProfileSuccess = createAction('GET_PROFILE_SUCCESS');
export const getProfileFailure = createAction('GET_PROFILE_FAILURE');

export const getProfileAction = username => async dispatch => {
  dispatch(getProfileRequest());
  try {
    const profile = await service.getProfile(username);
    dispatch(getProfileSuccess({ profile }));
  } catch (err) {
    dispatch(getProfileFailure());
    dispatch(setError({ err }));
  }
};
