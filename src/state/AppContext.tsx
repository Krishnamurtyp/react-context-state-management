import { UserReducer } from "./reducers/UserReducer";
import { CartReducer } from "./reducers/CartReducer";
import { InitialStateType, AllActions } from "./types";
import React, { createContext, useReducer } from "react";
import ProductReducer from "./reducers/ProductReducer";
const initialState: InitialStateType = {
  products: [],
  user: {
    username: "orinda",
    gender: "male",
    isAdmin: false,
    email: "forinda82@gmail.com",
  },
  cart: {
    products: {
      id: "",
      title: "",
      description: "",
      colors: undefined,
      category: undefined,
      sizes: undefined,
      count: 0,
    },
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
