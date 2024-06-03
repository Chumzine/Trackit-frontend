import React from "react";
import ChatMessage from "./ChatMessage";
import style from "./style.module.css";

const ChatWindow = ({ messages }) => {
  return (
    <div className={style.window}>
      {messages.map((msg, index) => (
        <ChatMessage key={index} text={msg.text} isUser={msg.isUser} />
      ))}
    </div>
  );
};

export default ChatWindow;