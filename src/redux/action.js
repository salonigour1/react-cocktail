import * as type from "./actionType";
import axios from "axios";
const fetchCocktailStart = () => ({
  type: type.FETCH_COCKTAIL_START,
});
const fetchCocktailSuccess = () => ({
  type: type.FETCH_COCKTAIL_SUCCESS,
  payload: cocktail,
});

const fetchCocktailFail = () => ({
  type: type.FETCH_COCKTAIL_FAIL,
  payload: error,
});

export function fetchCocktail() {
  return function (dispatch) {
    dispatch(fetchCocktailStart());
    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
    axios
      .get(url)
      .then((response) => {
        const cocktail = response.data.drink;
        dispatch(fetchCocktailSuccess(cocktail));
      })
      .catch((error) => {
        dispatch(fetchCocktailFail(error));
      });
  };
}
