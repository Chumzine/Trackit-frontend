import React from "react";
import style from "./style.module.css";
import ChatHeader from "./ChatHeader";
import ChatWindow from "./ChatWindow";
import ChatInput from "./ChatInput";
import axios from "axios";
import  { useState } from 'react';
import config from "../../../config";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async (message) => {
    const newMessage = { text: message, isUser: true };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/engines/davinci-codex/completions",
        {
          prompt: message,
          max_tokens: 150,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: config.apiKey,
          },
        }
      );

      if (
        response.data &&
        response.data.choices &&
        response.data.choices.length > 0
      ) {
        const aiMessage = {
          text: response.data.choices[0].text.trim(),
          isUser: false,
        };
        setMessages((prevMessages) => [...prevMessages, aiMessage]);
      } else {
        console.error("Unexpected API response:", response.data);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className={style.chatbotContainer}>
      <ChatHeader />
      <ChatWindow messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Chatbot;


