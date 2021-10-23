export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? { type: Key }
    : { type: Key; payload: M[Key] };
};

export type ProductType = {
  title: string;
  image: string;
  price: number;
  category: Array<string>;
  description: string[];
  sizes?: Array<string>;
  colors?: Array<string>;
};

export type UserType = {
  username: string;
  gender: string;
  isAdmin: boolean;
  email: string;
};

export type ProductCartType = {
  id: string;
  title: string;
  description: string;
  colors?: Array<string>;
  category?: Array<string>;
  sizes?: Array<string>;
  count: number;
};

export type CartType = {
  products: ProductCartType[];
  totalCost: number;
};

export type InitialStateType = {
  products: ProductType[];
  user: UserType;
  cart: CartType;
};

export enum ActionTypes {
  LOGIN = "LOGIN",
  UPDATE_USER = "UPDATE_USER",
  LOGOUT = "LOGOUT",
  ADD_PRODUCT = "ADD_PRODUCT",
  DELETE_PRODUCT = "DELETE_PRODUCT",
  UPDATE_PRODUCT = "UPDATE_PRODUCT",
  REGISTER_USER = "REGISTER_USER",
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  CLEAR_CART = "CLEAR_CART",
}

export type UserPayload = {
  [ActionTypes.LOGIN]: {
    email: string;
    password: string;
  };
  [ActionTypes.REGISTER_USER]: {
    username: string;
    email: string;
    gender: string;
    password: string;
  };
  [ActionTypes.UPDATE_USER]: {
    email?: string;
    username?: string;
    gender?: string;
    password?: string;
  };
  [ActionTypes.LOGOUT]:{};
};

export type CartPayload = {
  [ActionTypes.ADD_TO_CART]: {
    id: string;
    title: string;
    description: string;
    price: number;
    colors: string[];
    sizes: string[];
    category: string;
    quantity: number;
  };
  [ActionTypes.REMOVE_FROM_CART]: {
    id: string;
  };
  [ActionTypes.CLEAR_CART]: {};
};

export type ProductPayload = {
  [ActionTypes.ADD_PRODUCT]: {
    id: string;
    title: string;
    description: string;
    price: number;
    colors: string[];
    sizes: string[];
    category: string;
    quantity: number;
  };
  [ActionTypes.UPDATE_PRODUCT]: {
    title?: string;
    category: string;
    colors: string[];
  };
};

export type CartActions = ActionMap<CartPayload>[keyof ActionMap<CartPayload>];
export type UserActions = ActionMap<UserPayload>[keyof ActionMap<UserPayload>];
export type ProductActions =
  ActionMap<ProductPayload>[keyof ActionMap<ProductPayload>];

export type AllActions = CartActions | UserActions | ProductActions;
