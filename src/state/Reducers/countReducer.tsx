import { ActionTypes, Icount } from "../types";

const countReducer = (state: Icount, action: ActionTypes) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - action.payload;
    default:
      return state;
  }
};

export default countReducer;
