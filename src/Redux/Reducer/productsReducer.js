import {
  FETCH_PRODUCTS_ERROR,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
} from "../actiontype";

const initialState = {
  isLoading: false,
  products: [],
  isError: false,
  errorMessage: null,
};

const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: payload,
        isError: false,
        errorMessage: null,
      };

    case FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        isLoading: false,
        products: [],
        isError: true,
        errorMessage: payload,
      };

    default:
      return state;
  }
};

export default productsReducer;
