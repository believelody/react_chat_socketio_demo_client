import React from "react";
import styled from "styled-components";
import MessageItem from "./MessageItem";
import { useAppHooks } from "../../contexts";

/* const messages = [
  { username: "Andrew", text: `Hey what's up dude?` },
  { username: "Laki", text: `Fine and you?` },
  { username: "Andrew", text: `I'm cool. I'm in your city. Party tonight?` },
  { username: "Laki", text: `Aww maan too old for this now!!!` }
]; */

const MessageListStyle = styled.ul`
  margin: 60px 0 100px;
  padding: 0px 10px;
  display: flex;
  list-style: none;
  flex-direction: column;
`;

const MessageList = ({ users, messages }) => {
  const contact = users.find(user => user.username !== localStorage.username)

  return (
    <MessageListStyle>
      {messages.length > 0 &&
        messages.map((message, i) => <MessageItem key={i} contact={contact} message={message} />)}
    </MessageListStyle>
  );
};

export default MessageList;
