import React, { useEffect } from "react";
import styled from "styled-components";
import { useAppHooks } from "../../contexts";
import { SET_CURRENT_PROFILE } from "../../reducers/authReducer";
import { CHAT_SELECTED } from "../../reducers/transitionReducer";
import isMobile from "../../utils/isMobile";
import { useTransition } from "../../contexts/transitionContext";

const UserStyle = styled.li`
  margin: 0;
  padding-left: 8px;
  transition: all 300ms ease-in;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: #32465a;
    padding-left: 24px;
    border-right: 2px solid #2c3e50;
  }
`;

const User = ({ contact }) => {
  const { useAuth, socket } = useAppHooks();
  const [{ username }, dispatchAuth] = useAuth();
  const [chatSelected, dispatch] = useTransition();

  const handleClick = () => {
    socket.emit("new-chat", [contact.username, username]);
    if (isMobile) dispatch({ type: CHAT_SELECTED, payload: true });
  };

  useEffect(() => {
    if (localStorage.username) {
      dispatchAuth({
        type: SET_CURRENT_PROFILE,
        payload: localStorage.username
      });
    }
  }, [username]);

  useEffect(() => {
    console.log(chatSelected);
  }, [chatSelected]);

  return <UserStyle onClick={handleClick}>{contact.username}</UserStyle>;
};

export default User;
