// import { useReducer } from "react";
import { authReducer } from "./authReducer";
import { transitionReducer } from "./transitionReducer";

export default () => ({
  auth: authReducer,
  transition: transitionReducer
});
