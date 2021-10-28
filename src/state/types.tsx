export interface IState {
  user: {
    username: string;
    email: string;
  };
  count: Icount;
}
export type Icount = number;

export interface IUser {
  username: string;
  email: string;
}

export interface ILogin {
  type: "LOGIN";
  payload: { username: string; email: string };
}
export interface ILogout {
  type: "LOGOUT";
}

export interface ICountIncrement {
  type: "INCREMENT";
  payload: number;
}
export interface ICountDecrement {
  type: "DECREMENT";
  payload: number;
}

export type ActionTypes = ICountIncrement | ILogin | ICountDecrement|ILogout;
