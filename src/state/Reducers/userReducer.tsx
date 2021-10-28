import { ActionTypes, IUser } from "../types";

const userReducer = (state: IUser, action: ActionTypes) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, ...action.payload };
    case "LOGOUT":
      return { ...state, ...{ username: "", email: "" } };
    default:
      return state;
  }
};

export default userReducer;
