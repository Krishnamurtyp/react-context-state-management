import { useContext } from "react";
import Nav from "./components/Nav/Nav";
import { AppContext } from "./state/AppState";

const App = () => {
  const { state, dispatch } = useContext(AppContext);
  const login = () => {
    dispatch({
      type: "LOGIN",
      payload: { username: "Mike", email: "mike@gmail.com" },
    });
  };
  const logout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };
  const increaseCount = () => {
    dispatch({ type: "INCREMENT", payload: 1 });
  };
  const decreaseCount = () => {
    dispatch({ type: "DECREMENT", payload: 1 });
  };
  return (
    <div>
      <Nav />
      <div className="button-wrapper">
        <button
          {...(state.user.username && { disabled: true })}
          onClick={login}
        >
          Login
        </button>
        <button
          {...(!state.user.username && { disabled: true })}
          onClick={logout}
        >
          Logout
        </button>
        <button
          {...(state?.count! >= 10 && { disabled: true })}
          onClick={increaseCount}
        >
          Increase count
        </button>
        <button
          {...(state?.count! < 1 && { disabled: true })}
          onClick={decreaseCount}
        >
          Decrease count
        </button>
      </div>
    </div>
  );
};

export default App;
