  import { FETCH_BOOKS , FETCH_BOOK} from '../actions/types';

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
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
    default:
      return state;
  }
}