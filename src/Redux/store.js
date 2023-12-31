import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from "redux";
import thunk from "redux-thunk";
import productsReducer from "./Reducer/productsReducer";
import { authLoginReducer, authSignupReducer } from "./Reducer/authReducer";
import cartReducer from "./Reducer/cartReducer";
import crudReducer from "./Reducer/crudReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  userSignup: authSignupReducer,
  userLogin: authLoginReducer,
  cart: cartReducer,
  crudReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
