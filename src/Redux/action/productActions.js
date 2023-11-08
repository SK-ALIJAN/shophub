import axios from "axios";
import {
  FETCH_PRODUCTS_ERROR,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
} from "../actiontype";

export const fetchProducts = (param) => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCH_PRODUCTS_REQUEST });
      const response = await axios.get("https://fakestoreapi.com/products", {
        params: {
          sort: param,
        },
      });
      dispatch({
        type: FETCH_PRODUCTS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({ type: FETCH_PRODUCTS_ERROR, payload: error.message });
    }
  };
};
