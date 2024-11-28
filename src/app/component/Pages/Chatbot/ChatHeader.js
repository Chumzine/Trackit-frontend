import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import style from "./style.module.css";

const ChatHeader = () => {
  return (
    <div className={style.header}>
      <div className={style.arrowBack}> <IoIosArrowBack /></div> 
      <span className={style.onlineIndicator}></span>
      <div className={style.named}>Sunday Taiwo</div>
      <p>online</p>
    </div>
  );
};

export default ChatHeader;
