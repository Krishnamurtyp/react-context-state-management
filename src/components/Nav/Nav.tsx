import { useContext } from "react";
import { AppContext } from "../../state/AppState";
import "./Nav.scss";

const Nav = () => {
  const { state } = useContext(AppContext);
  return (
    <div className="nav-wrapper">
      <div className="left">{state.count > 0 ? state.count : "Count is zero"}</div>
      <div className="right">
        {state.user.username ? state.user.username : "Unknown user"}
      </div>
    </div>
  );
};

export default Nav;
