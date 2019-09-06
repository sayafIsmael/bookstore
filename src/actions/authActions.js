import { STORE_TOKEN, DELETE_TOKEN} from './types';

export const storeToken = (token) => dispatch => {
      dispatch({
        type: STORE_TOKEN,
        payload: token
      })
};

export const deleteToken = () => dispatch => {
  dispatch({
    type: DELETE_TOKEN,
    payload: {}
  })
};