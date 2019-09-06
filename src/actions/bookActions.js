import {
  FETCH_BOOKS,
  FETCH_BOOK,
  ADD_TO_CART,
  DELETE_FROM_CART,
  UPDATE_CART_QUANTITY,
  EMPTY_CART,
  FETCH_REVIEWS
} from './types';

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

export const emptyCart = () => dispatch => {
  dispatch({
    type: EMPTY_CART,
    payload: null
  });
}

export const deleteFromCart = (id) => dispatch => {
  dispatch({
    type: DELETE_FROM_CART,
    payload: id
  });
}

export const updateCartQuantity = (id, quantity) => dispatch => {
  dispatch({
    type: UPDATE_CART_QUANTITY,
    payload: id,
    quantity: quantity
  });
}

export const fetchReviews = (url) => dispatch => {
  fetch(url)
    .then(res => res.json())
    .then(review =>
      dispatch({
        type: FETCH_REVIEWS,
        payload: review
      })
    );
}