import { FETCH_BOOKS } from './types';

export const fetchBooks = (url) => dispatch => {
  fetch(url)
    .then(res => res.json())
    .then(books =>
      dispatch({
        type: FETCH_BOOKS,
        payload: books
      })
    );
};