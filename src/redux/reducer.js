// 1. reducer is a function that takes 2 things
//  intialState and action and returns the new state after performing operations.
//action intern is a object which consist of 2 things type and payload

import * as types from "./actionType";
const intialState = {
  cocktail: [],
  loading: true,
  error: null,
};

const cocktailReducer = (state = intialState, action) => {
  switch (action.type) {
    case types.FETCH_COCKTAIL_START:
      return { ...state, loading: true };
    case types.FETCH_COCKTAIL_SUCCESS:
      return { ...state, loading: false, cocktail: action.payload };
    case types.FETCH_COCKTAIL_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
export default cocktailReducer;
