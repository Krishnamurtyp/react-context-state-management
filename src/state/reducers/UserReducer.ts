import {
  AllActions,
  UserType,
  ActionTypes,
} from "../types";

export const UserReducer = (state: UserType, action: AllActions) => {
  switch (action.type) {
    case ActionTypes.LOGIN:
      console.log("Login");
      return state;
    case ActionTypes.REGISTER_USER:
      console.log("Login");
      return state;
    case ActionTypes.LOGOUT:
      const newState = { username: "", email: "", isAdmin: false, gender: "" };
      return { ...state, ...newState };
    default:
      return state;
  }
};

export default UserReducer;
