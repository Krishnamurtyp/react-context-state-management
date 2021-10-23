import { render } from "react-dom";
import React from "react";
import App from "./App";
import { AppProvider } from "./state/AppContext";

render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
