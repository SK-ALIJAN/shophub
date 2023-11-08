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
        "https://654b22d45b38a59f28ee8f8e.mockapi.io/user",
        credentials
      );
      dispatch({
        type: SIGNUP_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: SIGNUP_ERROR,
        payload: error.message,
      });
    }
  };
};

export const login = (credentials) => {
  let { email, password } = credentials;

  return async (dispatch) => {
    try {
      dispatch({
        type: LOGIN_RQUEST,
      });
      const response = await axios.get(
        "https://654b22d45b38a59f28ee8f8e.mockapi.io/user"
      );
      let filteredData = response.data.filter((ele) => {
        return ele.email === email && ele.password === password;
      });
      if (filteredData.length !== 0) {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: filteredData[0].id,
        });
      } else {
        throw new Error("please look into your credentials");
      }

      // store token id and Logged flag
      localStorage.setItem("user", filteredData[0].id);
      localStorage.setItem("isLoggedIn", true);
    } catch (error) {
      dispatch({
        type: LOGIN_ERROR,
        payload: error.message,
      });
    }
  };
};
