import { AllActions, ActionTypes, ProductType } from "../types";

export const ProductReducer = (state: ProductType[], action: AllActions) => {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT:
      console.log("Login");
      return state;
    default:
      return state;
  }
};

export default ProductReducer;
