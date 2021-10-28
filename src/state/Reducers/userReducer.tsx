import { ActionTypes, IUser } from "../types";

const userReducer = (state: IUser, action: ActionTypes) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default userReducer;
