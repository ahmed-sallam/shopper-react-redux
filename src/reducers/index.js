import { combineReducers } from "redux";
import products from "./products";
import shoppingList from "./shoppingList";
import summary from "./summary";

const rootReducer = combineReducers({
  products,
  shoppingList,
  summary
});

export default rootReducer;
