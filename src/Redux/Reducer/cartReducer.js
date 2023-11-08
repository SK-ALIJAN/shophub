import { ADD_TO_CART } from "../actiontype";

let InitialData = {
  cart: JSON.parse(localStorage.getItem("cart")) ?? [],
};

const cartReducer = (state = InitialData, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      let data = [...state.cart, payload];
      localStorage.setItem("cart", JSON.stringify(data));
      return { ...state, cart: [...state.cart, payload] };

    default:
      return state;
  }
};

export default cartReducer;
