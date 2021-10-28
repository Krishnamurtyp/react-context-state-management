import { ActionTypes, Icount } from "../types";

const countReducer = (state: Icount, action: ActionTypes) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    default:
      return state;
  }
};

export default countReducer;
