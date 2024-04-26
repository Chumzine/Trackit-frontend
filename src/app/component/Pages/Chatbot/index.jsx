import React, { useState } from "react";
import style from "./style.module.css";


function Chatbox() {
  const [userMessages, setUserMessages] = useState([]);
  const [chatbotMessages, setChatbotMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const sendMessage = () => {
    if (inputValue.trim() !== "") {
      const newUserMessage = { sender: "You", text: inputValue };
      setUserMessages([...userMessages, newUserMessage]);
      setInputValue("");
      // Simulate response after 1 second
      setTimeout(() => {
        const response = generateResponse(inputValue);
        const newChatbotMessage = { sender: "Chatbot", text: response };
        setChatbotMessages([...chatbotMessages, newChatbotMessage]);
      }, 3000);
    }
  };

  const generateResponse = (message) => {
    // Here you can implement logic to generate responses based on user input
    // For simplicity, let's just echo back the user's message
    return `You said: "${message}"`;
  };

  
    return (
    <div className={style.chatbox}>
      <header className={style.header}> fgfgf</header>
      <div className={style.chatlogs}>
        {userMessages.map((message, index) => (
          <div key={`user-${index}`} className={style.message}>
            <strong>{message.sender}:</strong> {message.text}
          </div>
        ))}
        {chatbotMessages.map((message, index) => (
          <div key={`chatbot-${index}`} className={style.message}>
            <strong>{message.sender}:</strong> {message.text}
          </div>
        ))}
      </div>
      <div className={style.inputContainer}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type your message..."
          className={style.inputField}
        />
        <button onClick={sendMessage} className={style.sendButton}>
          Send
        </button>
      </div>
    </div>
  );
}

export default Chatbox;
