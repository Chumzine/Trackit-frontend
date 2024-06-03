import React, { useState } from "react";
import style from "./style.module.css";
import { CiLocationArrow1 } from "react-icons/ci";


const ChatInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className={style.inputContainer}>
      <input
        className={style.input}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Your message"
      />
      <button className={style.sendButton} onClick={handleSubmit}>
        <CiLocationArrow1 />
      </button>
      <div></div>
    </div>
  );
};

export default ChatInput;
