import {
  FETCH_BOOKS,
  FETCH_BOOK,
  ADD_TO_CART,
  DELETE_FROM_CART,
  UPDATE_CART_QUANTITY,
  EMPTY_CART,
  FETCH_REVIEWS,
  SORT_BOOKS,
  SELECT_AUTHOR,
  SELECT_PUBLISHER,
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

export const selectAuthor = (author) => dispatch => {
  dispatch({
    type: SELECT_AUTHOR,
    payload: author
  });
}

export const selectPublisher = (publisher) => dispatch => {
  dispatch({
    type: SELECT_PUBLISHER,
    payload: publisher
  });
}

export const emptyCart = () => dispatch => {
  dispatch({
    type: EMPTY_CART,
    payload: null
  });
}

export const sortBooks = (item, option) => dispatch => {
  if (item != undefined) {
    let sorted = []; 
      if(option == 'plowToHigh'){
        sorted = item.books.sort((a, b) => parseFloat(a.new_price) - parseFloat(b.new_price));
      }else if(option == 'phighToLow'){
        sorted = item.books.sort((a, b) => parseFloat(b.new_price) - parseFloat(a.new_price));
      }else if(option == 'dlowToHigh'){
        sorted = item.books.sort((a, b) => parseFloat(a.discount) - parseFloat(b.discount));
      }else if(option == 'dhighToLow'){
        sorted = item.books.sort((a, b) => parseFloat(b.discount) - parseFloat(a.discount));
      }
    
    dispatch({
      type: SORT_BOOKS,
      payload: {
        success: true,
        author: item.author ? item.author : null,
        publisher: item.publisher ? item.publisher : null,
        category: item.category ? item.category : null,
        books: sorted,
      },
      selectedOption: option
    });
  }
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