import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import "./index.scss";
import  Provider  from "./state/AppState";

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);
