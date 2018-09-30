export const GET_SHOPPING_LIST = "GET_SHOPPING_LIST";
export const ADD_PRODUCT_TO_LIST = "ADD_PRODUCT_TO_LIST";
export const REMOVE_PRODUCT_FROM_LIST = "REMOVE_PRODUCT_FROM_LIST";

export const removeFromList = id => {
  return {
    type: REMOVE_PRODUCT_FROM_LIST,
    payload: id
  };
};

export const addToList = item => {
  return {
    type: ADD_PRODUCT_TO_LIST,
    payload: item
  };
};
