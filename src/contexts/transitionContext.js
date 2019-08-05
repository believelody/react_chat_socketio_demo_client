import React, { createContext, useContext, useReducer } from "react";
import reducer from "../reducers/transitionReducer";

const initialState = false;

export const TransitionContext = createContext();

export const TransitionProvider = ({ children }) => {
  return (
    <TransitionContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </TransitionContext.Provider>
  );
};

export const useTransition = () => useContext(TransitionContext);
