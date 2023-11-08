import {
  LOGIN_ERROR,
  LOGIN_RQUEST,
  LOGIN_SUCCESS,
  SIGNUP_ERROR,
  SIGNUP_RQUEST,
  SIGNUP_SUCCESS,
  USER_LOGOUT,
} from "../actiontype";

let SignupInitialState = {
  isLoading: false,
  isError: false,
  errorMessage: null,
};

const authSignupReducer = (state = SignupInitialState, { type, payload }) => {
  switch (type) {
    case SIGNUP_RQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        errorMessage: null,
      };

    case SIGNUP_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: payload,
      };

    default:
      return state;
  }
};

const LoginInitialState = {
  isLoading: false,
  user: localStorage.getItem("user"),
  isLoggedIn: localStorage.getItem("isLoggedIn"),
  isError: false,
  errorMessage: null,
};

const authLoginReducer = (state = LoginInitialState, { type, payload }) => {
  switch (type) {
    case LOGIN_RQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: payload,
        isLoggedIn: true,
        isError: false,
        errorMessage: null,
      };

    case LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: payload,
        user: null,
        isLoggedIn: false,
      };

    case USER_LOGOUT:
      localStorage.setItem("isLoggedIn", false);
      return {
        ...state,
        isLoggedIn: false,
        token: null,
      };
    default:
      return state;
  }
};

export { authLoginReducer, authSignupReducer };
