import {
  ADD_PRODUCT_TO_LIST,
  REMOVE_PRODUCT_FROM_LIST
} from "../actions/shoppingList";

const initialState = [];
const summaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_LIST:
      return [...state, action.payload];
    case REMOVE_PRODUCT_FROM_LIST:
      return state.filter(i => action.payload !== i.id);
    default:
      return state;
  }
};

export default summaryReducer;
