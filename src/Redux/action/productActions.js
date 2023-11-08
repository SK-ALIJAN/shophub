import axios from "axios";
import {
  ADD_ITEM,
  CRUD_ERROR,
  CRUD_REQUEST,
  DELETE_ITEM,
  FETCH_PRODUCTS_ERROR,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  GET_ITEMS,
  UPDATE_ITEM,
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

// crud operations
export const addItem = (item) => {
  return async (dispatch) => {
    try {
      dispatch({ type: CRUD_REQUEST });
      const response = await axios.post(
        `https://fakestoreapi.com/products`,
        item
      );
      dispatch({ type: ADD_ITEM, payload: response.data });
    } catch (error) {
      dispatch({ type: CRUD_ERROR, payload: error.message });
    }
  };
};

export const deleteItem = (itemId) => {
  return async (dispatch) => {
    try {
      dispatch({ type: CRUD_REQUEST });
      let response = await axios.delete(
        `https://fakestoreapi.com/products/${itemId}`
      );
      dispatch({
        type: DELETE_ITEM,
        payload: itemId,
      });
      console.log(response);
    } catch (error) {
      dispatch({ type: CRUD_ERROR, payload: error.message });
    }
  };
};

export const updateItem = (id, updatedItem) => {
  return async (dispatch) => {
    try {
      dispatch({ type: CRUD_REQUEST });
      const response = await axios.put(
        `https://fakestoreapi.com/products/${id}`,
        updatedItem
      );
      dispatch({
        type: UPDATE_ITEM,
        payload: response.data,
      });
    } catch (error) {
      dispatch({ type: CRUD_ERROR, payload: error.message });
    }
  };
};

export const getItems = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: CRUD_REQUEST });
      const response = await axios.get(`https://fakestoreapi.com/products`);
      dispatch({
        type: GET_ITEMS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({ type: CRUD_ERROR, payload: error.message });
    }
  };
};
