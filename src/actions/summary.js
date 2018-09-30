export const GET_SUMMARY = "GET_SUMMARY";

export const ADD_PRODUCT_TO_SUMMARY = "ADD_PRODUCT_TO_SUMMARY";
export const REMOVE_PRODUCT_FROM_SUMMARY = "REMOVE_PRODUCT_FROM_SUMMARY";

export const removeFromSummary = item => {
  return {
    type: REMOVE_PRODUCT_FROM_SUMMARY,
    payload: item
  };
};

export const addToSummary = item => {
  return {
    type: ADD_PRODUCT_TO_SUMMARY,
    payload: item
  };
};
