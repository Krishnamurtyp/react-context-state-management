import { render } from "react-dom";
import React from "react";
import App from "./App";
import { AppProvider } from "./state/AppContext";
import GlobalStyles from "./globalStyle/Global.css";

render(
  <React.StrictMode>
    <GlobalStyles />
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
