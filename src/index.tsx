import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import "./index.scss";
import { AppProvider } from "./state/AppState";

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById("root")
);
