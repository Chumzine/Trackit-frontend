import React from "react";
import style from "./style.module.css";

const ChatMessage = ({ text, isUser }) => {
  return (
    <div className={`${style.message} ${isUser ? style.userMessage : ""}`}>
      {text}
      {isUser && (
        <div className={style.voiceMessage}>
          {/* <div className={style.playButton}>▶</div> */}
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
