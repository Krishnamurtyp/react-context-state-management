import React, { createContext, useReducer } from "react";
import countReducer from "./Reducers/countReducer";
import userReducer from "./Reducers/userReducer";
import { ActionTypes, IState } from "./types";

const initialState: IState = {
  user: {
    username: "",
    email: "",
  },
  count: 0,
};

const AppContext = createContext<{
  state: IState;
  dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => null });

const combinedReducers = ({ user, count }, action: ActionTypes) => ({
  user: userReducer(user, action),
  count: countReducer(count, action),
});

const AppProvider: React.FC = (props) => {
  const [state, dispatch] = useReducer(combinedReducers, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
};
export default AppProvider
export  { AppContext, AppProvider };
