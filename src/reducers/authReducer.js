// import { useReducer } from "react";

export const SET_CURRENT_PROFILE = "SET_CURRENT_PROFILE";
export const REGISTER = "REGISTER";
export const AUTH_FAILED = "AUTH_FAILED";
export const DISCONNECT = "DISCONNECT";
export const RESET_ERROR = 'RESET_ERROR'

export const initAuthState = {
  isConnected: false,
  username: null,
  error: null
};

export const authReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_PROFILE:
      return {
        ...state,
        username: payload,
        isConnected: true
      };

    case AUTH_FAILED:
      return {
        ...state,
        error: payload
      };

    case DISCONNECT:
      return {
        ...state,
        isConnected: false,
        username: null
      };
    
    case RESET_ERROR:
      return {
        ...state,
        error: null
      }

    default:
      return state;
  }
};
