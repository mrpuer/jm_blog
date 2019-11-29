import { handleActions } from 'redux-actions';

const initState = null;

const error = handleActions(
  {
    CLEAR_ERROR: () => {
      return initState;
    },
    SET_ERROR: (state, { payload: { err } }) => {
      const { data, status } = err.response;
      return { data, status };
    },
  },
  initState
);
export default error;
