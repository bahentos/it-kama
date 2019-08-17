import React from "react";
import s from "./Message.module.css";
import { NavLink } from 'react-router-dom';
import MessagesHeader from './MessagesHeader/MessagesHeader';
import InputAnswer from './InputAnswer/InputAnswer';
import MessagesArea from './MessagesArea/MessagesArea';


const Message = (props) => {
  return (
    <div className={s.messagesItems}>
      <MessagesHeader />
      <MessagesArea dialogsMessage={props.dialogsMessage} />
      <InputAnswer />
    </div>
  )
}

export default Message;
