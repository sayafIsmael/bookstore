  import {
    FETCH_BOOKS,
    FETCH_BOOK,
    ADD_TO_CART,
    DELETE_FROM_CART
  } from '../actions/types';

  const initialState = {
    items: [],
    item: {},
    cart: []
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

          default:
            return state;
    }
  }