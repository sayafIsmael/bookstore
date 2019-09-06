  import {
    FETCH_BOOKS,
    FETCH_BOOK,
    ADD_TO_CART,
    DELETE_FROM_CART,
    UPDATE_CART_QUANTITY,
    EMPTY_CART,
    FETCH_REVIEWS
  } from '../actions/types';

  const initialState = {
    items: [],
    item: {},
    cart: [],
    reviews: []
  };

  export default function (state = initialState, action) {
    switch (action.type) {
      case FETCH_BOOKS:
        return {
          ...state,
          items: action.payload
        };
      case FETCH_BOOK:
        return {
          ...state,
          item: action.payload
        };
      case ADD_TO_CART:
        if (!state.cart.find((book) => book.id === action.payload.id)) {
          return {
            ...state,
            cart: state.cart == undefined ? [action.payload] : [...state.cart, action.payload]
          };
        }

        case DELETE_FROM_CART:
          return {
            ...state,
            cart: [
              ...state.cart.slice(0, action.payload),
              ...state.cart.slice(action.payload + 1)
            ]
          };

        case UPDATE_CART_QUANTITY:
          if (action.quantity >= 1) {
            let books = [...state.cart];
            books.find(book => book.id == action.payload).quantity = action.quantity;
            return {
              ...state,
              cart: books
            };
          }
          case EMPTY_CART:
            return {
              ...state,
              cart: []
            };
          case FETCH_REVIEWS:
            return {
              ...state,
              reviews: action.payload
            };
          default:
            return state;
    }
  }