// import { GET_PRODUCTS } from "../actions/products";
import { ADD_PRODUCT, REMOVE_PRODUCT } from "../actions/products";

const initialState = [
  {
    id: 1,
    name: "Item 1",
    price: 10,
    weight: 50
  },
  {
    id: 2,
    name: "Item 2",
    price: 15,
    weight: 30
  },
  {
    id: 3,
    name: "Item 3",
    price: 13,
    weight: 55
  },
  {
    id: 4,
    name: "Item 4",
    price: 32,
    weight: 140
  }
];
const summaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.payload];

    case REMOVE_PRODUCT:
      return state.filter(i => action.payload !== i.id);
    default:
      return state;
  }
};

export default summaryReducer;
