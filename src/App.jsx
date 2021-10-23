import { AppContext } from "./state/AppContext";
import { useContext } from "react";
import { ActionTypes } from "./state/types";
const App = () => {
  const { state, dispatch } = useContext(AppContext);
  return (
    <div>
      {state.user.username ? (
        <h1>Hello, {state.user.username}</h1>
      ) : (
        <h1>No user currently logged in</h1>
      )}
      <button
        onClick={() => {
          dispatch({ type: ActionTypes.LOGOUT });
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default App;
