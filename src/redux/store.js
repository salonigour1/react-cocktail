// import { createStore, applyMiddleware } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import rootReducer from "./root-reducer";

const middleware = [thunk];
const store = createStore(rootReducer, applyMiddleware(...middleware));
export default store;
