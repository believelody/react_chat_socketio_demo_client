import { useReducer } from "react";

export const CHAT_SELECTED = "CHAT_SELECTED";
export const CHAT_UNSELECTED = "CHAT_UNSELECTED";

export const initTransitionState = { chatSelected: false };

export const transitionReducer = (state, { type, payload }) => {
  switch (type) {
    case CHAT_SELECTED:
    case CHAT_UNSELECTED:
      console.log(payload);
      return { ...state, chatSelected: payload };

    default:
      return state;
  }
};

export default () => useReducer;
