import React, { createContext, useContext } from "react";
import io from "socket.io-client";
import { createBrowserHistory } from "history";
// import reducers from "../reducers";

export const AppContext = createContext();

const history = createBrowserHistory({
  forceRefresh: true
});
let herokuUrl = "https://react-chat-socketio-server.herokuapp.com";
const socket = io(`${herokuUrl}`);

export const AppProvider = ({ reducers, children }) => {
  return (
    <AppContext.Provider value={{ ...reducers, socket, history }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppHooks = () => useContext(AppContext);
