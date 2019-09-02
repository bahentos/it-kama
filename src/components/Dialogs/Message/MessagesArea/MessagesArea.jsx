import React from "react";
import s from "./MessagesArea.module.css";
import triangle from './img/triangle.svg'


const MessagesArea = (props) => {
  let messages = props.dialogsMessage.map( message => 
    (<div className={s.messageContainer}>
      <img src={triangle} alt="" />
      <div className={s.message}>{message.message}</div>
    </div>)
   )
  return (
    <div className={s.messagesArea}>
      {messages}
    </div>
  )
}

export default MessagesArea;
