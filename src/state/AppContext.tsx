import { UserReducer } from "./reducers/UserReducer";
import { CartReducer } from "./reducers/CartReducer";
import { InitialStateType, AllActions } from "./types";
import React, { createContext, useReducer } from "react";
import ProductReducer from "./reducers/ProductReducer";
const initialState: InitialStateType = JSON.parse(
  localStorage.getItem("state")!
)
  ? JSON.parse(localStorage.getItem("state")!)
  : {
      products: [],
      user: {
        username: "",
        gender: "",
        isAdmin: false,
        email: "",
      },
      cart: {
        products: [],
        totalCost: 0,
      },
    };

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<AllActions>;
}>({ state: initialState, dispatch: () => null });

const combinedReducers = (
  { user, cart, products }: InitialStateType,
  action: AllActions
) => ({
  cart: CartReducer(cart, action),
  user: UserReducer(user, action),
  products: ProductReducer(products, action),
});

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(combinedReducers, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
