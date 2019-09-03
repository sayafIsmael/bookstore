import { FETCH_BOOKS,  FETCH_BOOK, ADD_TO_CART, DELETE_FROM_CART} from './types';

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

export const fetchBook = (url) => dispatch => {
  fetch(url)
    .then(res => res.json())
    .then(book =>
      dispatch({
        type: FETCH_BOOK,
        payload: book
      })
    );
};

export const addtoCart = (book) => dispatch => {
  dispatch({
    type: ADD_TO_CART,
    payload: book
  });
}

export const deleteFromCart = (id) => dispatch => {
  dispatch({
    type: DELETE_FROM_CART,
    payload: id
  });
}