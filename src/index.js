import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppProvider } from "./contexts";
import reducers from "./reducers";
import { initAuthState } from "./reducers/authReducer";
import { initTransitionState } from "./reducers/transitionReducer";

const initialState = {
  ...initAuthState,
  ...initTransitionState
};

ReactDOM.render(
  <AppProvider initialState={initialState} reducers={reducers}>
    <App />
  </AppProvider>,
  document.getElementById("root")
);
