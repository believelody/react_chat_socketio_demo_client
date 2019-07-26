import React, { useEffect } from "react";
import styled from "styled-components";
import { useAppHooks } from "../../contexts";
import { SET_CURRENT_PROFILE } from "../../reducers/authReducer";
import { CHAT_SELECTED } from "../../reducers/transitionReducer";
import isMobile from "../../utils/isMobile";
// import { useTransition } from "../../contexts/transitionContext";

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
  const { useAuth, useTransition, socket } = useAppHooks();
  const [{ username }, dispatchAuth] = useAuth;
  const [_, dispatchTransion] = useTransition;

  const handleClick = () => {
    socket.emit("new-chat", [contact.username, username]);
    if (isMobile) dispatchTransion({ type: CHAT_SELECTED, payload: true });
  };

  useEffect(() => {
    if (localStorage.username) {
      dispatchTransion({
        type: SET_CURRENT_PROFILE,
        payload: localStorage.username
      });
    }
  }, [username]);

  return <UserStyle onClick={handleClick}>{contact.username}</UserStyle>;
};

export default User;
