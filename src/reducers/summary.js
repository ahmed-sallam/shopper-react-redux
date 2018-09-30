import {
  ADD_PRODUCT_TO_SUMMARY,
  REMOVE_PRODUCT_FROM_SUMMARY
} from "../actions/summary";

const initialState = {
  total: 0,
  price: 0,
  weight: 0
};
const summaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_SUMMARY:
      let price = action.payload.price;
      let weight = action.payload.weight;
      return {
        total: state.total + 1,
        price: state.price + price,
        weight: state.weight + weight
      };
    case REMOVE_PRODUCT_FROM_SUMMARY:
      let priceR = action.payload.price;
      let weightR = action.payload.weight;
      return {
        total: state.total - 1,
        price: state.price - priceR,
        weight: state.weight - weightR
      };
    default:
      return state;
  }
};

export default summaryReducer;
