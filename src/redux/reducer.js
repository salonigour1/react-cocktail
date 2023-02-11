// 1. reducer is a function that takes 2 things
//  intialState and action and returns the new state after performing operations.
//action intern is a object which consist of 2 things type and payload

const intialState = {
  cocktail: [],
  loading: true,
  error: null,
};

const cocktailReducer = (state = intialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default cocktailReducer;
