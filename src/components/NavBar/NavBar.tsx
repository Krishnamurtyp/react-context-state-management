import { ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../state/AppContext";
import "./style.scss";

const NavBar = () => {
  const { state } = useContext(AppContext);

  return (
    <div className="nav-bar-wrapper">
      <div className="left">
        <div className="logo">
          <img src="logo512.png" alt="" />
          Shoefy
        </div>
      </div>
      <div className="right">
        <Badge badgeContent={`${state.cart.products.length}`}>
          <ShoppingCart />
        </Badge>
      </div>
    </div>
  );
};

export default NavBar;
