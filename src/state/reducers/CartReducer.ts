import { AllActions, CartType, ActionTypes } from "../types";

export const CartReducer = (state: CartType, action: AllActions) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return state;
    default:
      return state;
  }
};

export default CartReducer;
