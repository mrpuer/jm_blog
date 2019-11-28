import { handleActions } from 'redux-actions';

const initState = null;

const error = handleActions(
  {
    CLEAR_ERROR: () => {
      return null;
    },
    SET_ERROR: (state, { payload }) => {
      return payload.status;
    },
  },
  initState
);
export default error;
