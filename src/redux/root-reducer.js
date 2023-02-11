// root-reducer is used to combine more than one reducers.
import { combineReducers } from "react-redux";
import cocktailReducer from "./reducer";

const rootReducer = combineReducers({ data: cocktailReducer });
export default rootReducer;
