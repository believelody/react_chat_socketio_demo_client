import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppProvider } from "./contexts";
import reducers from "./reducers";

ReactDOM.render(
  <AppProvider reducers={reducers}>
    <App />
  </AppProvider>,
  document.getElementById("root")
);
