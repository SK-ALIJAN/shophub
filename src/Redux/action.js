// 1. Redux Setup - store.js

import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import productsReducer from "./reducers/productsReducer";
import authReducer from "./reducers/authReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  auth: authReducer,
  // ...other reducers if any
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
