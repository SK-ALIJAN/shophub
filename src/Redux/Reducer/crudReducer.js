import {
  ADD_ITEM,
  CRUD_ERROR,
  CRUD_REQUEST,
  DELETE_ITEM,
  GET_ITEMS,
  UPDATE_ITEM,
} from "../actiontype";

let initialValue = {
  isLoading: false,
  data: [],
  isError: false,
  errorMessage: "",
};

const crudReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case CRUD_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ADD_ITEM: {
      return {
        ...state,
        isLoading: false,
        data: [...state.data, payload],
        isError: false,
        errorMessage: "",
      };
    }

    case GET_ITEMS: {
      return {
        ...state,
        isLoading: false,
        data: payload,
        isError: false,
        errorMessage: "",
      };
    }
    case UPDATE_ITEM: {
      let UpdatedData = state.data.map((ele) => {
        if (ele.id === payload.id) {
          return { ...ele, payload };
        } else {
          return ele;
        }
      });

      return {
        ...state,
        isLoading: false,
        data: UpdatedData,
        isError: false,
        errorMessage: "",
      };
    }
    case DELETE_ITEM: {
      let filteredData = state.data.filter((ele) => {
        return ele.id !== payload.id;
      });

      return {
        ...state,
        isLoading: false,
        data: filteredData,
        isError: false,
        errorMessage: "",
      };
    }

    case CRUD_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: payload,
      };
    }

    default:
      return state;
  }
};

export default crudReducer;
