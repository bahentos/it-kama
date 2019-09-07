import React from "react";
import s from "./MessagesArea.module.css";
import triangle from './img/triangle.svg'


const MessagesArea = (props) => {
  let messages = props.dialogsMessage.map( message => 
    (<div key={message.id} className={s.messageContainer}>
      <img key={"img"+message.id} src={triangle} alt="" />
      <div key={"message"+message.id} className={s.message}>{message.message}</div>
    </div>)
   )
  return (
    <div className={s.messagesArea}>
      {messages}
    </div>
  )
}

export default MessagesArea;
