import axios from "axios";
import {
  LOGIN_ERROR,
  LOGIN_RQUEST,
  LOGIN_SUCCESS,
  SIGNUP_ERROR,
  SIGNUP_RQUEST,
  SIGNUP_SUCCESS,
} from "../actiontype";

export const signup = (credentials) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: SIGNUP_RQUEST,
      });
      const response = await axios.post(
        "https://fakestoreapi.com/users",
        credentials
      );
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: response.data,
      });
      localStorage.setItem("user", response.data.id);
    } catch (error) {
      dispatch({
        type: SIGNUP_ERROR,
        payload: error.message,
      });
    }
  };
};

export const login = (credentials) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: LOGIN_RQUEST,
      });
      const response = await axios.post(
        "https://fakestoreapi.com/auth/login",
        credentials
      );
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data.token,
      });

      // store token id and Logged flag
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("isLoggedIn", true);
    } catch (error) {
      dispatch({
        type: LOGIN_ERROR,
        payload: error.message,
      });
    }
  };
};
