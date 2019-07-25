import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useAppHooks } from "../../contexts";
import { SET_CURRENT_PROFILE } from "../../reducers/authReducer";

const ChatHeaderStyle = styled.header`
  width: 80%;
  height: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 0 0 0 25px;
  margin: 0;
  top: 0;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  z-index: 1;

  & > h4 {
    padding: 0;
    margin: 0 0 0 15px;
  }

  & > .img-contact {
    width: 40px;
    line-height: 30px;
    border-radius: 50%;
    height: 40px;
    text-align: center;
    font-size: 2em;
    background-color: white;
    border: 2px solid #aaa;
    cursor: pointer;
  }

  & > .btn-option {
    text-align: center;
    position: absolute;
    right: 5%;
    top: 50%;
    transform: translateY(-50%);
    padding: 5px;
    margin: 0;
    font-size: 1.2em;
    border-radius: 4px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
    width: 40px;
    cursor: pointer;
  }

  & .header-typing {
    margin-left: 30px;
    font-style: italic;
  }
`;

const ChatHeader = ({ getHeaderPosition, isDisplayed, chat }) => {
  const { useAuth, socket } = useAppHooks();

  const [dest, setDest] = useState(null);

  const headerRef = useRef();

  const [isTyping, setTyping] = useState(false);

  const handleClick = e => {
    getHeaderPosition(
      !isDisplayed,
      headerRef.current.getBoundingClientRect().height
    );
  };

  socket.on("is-typing", data => setTyping(data));

  useEffect(() => {
    if (localStorage.username) {
      setDest(chat.users.find(user => user.username !== localStorage.username));
    }
  }, [localStorage.username, dest]);

  return (
    <ChatHeaderStyle ref={headerRef}>
      <span className="btn-option" onClick={handleClick}>
        +
      </span>
      <span className="img-contact">
        {dest && dest.username[0].toUpperCase()}
      </span>
      <h4>{dest && dest.username}</h4>
      {isTyping && <span className="header-typing">is typing...</span>}
    </ChatHeaderStyle>
  );
};

export default ChatHeader;
