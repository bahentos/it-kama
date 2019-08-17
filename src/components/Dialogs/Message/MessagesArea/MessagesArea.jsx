import React from "react";
import s from "./MessagesArea.module.css";
import { NavLink } from 'react-router-dom';
import triangle from './img/triangle.svg'


const MessagesArea = (props) => {
  return (
    <div className={s.messagesArea}>
      <div className={s.messageContainer}>
        <img src={triangle} alt="" />
        <div className={s.message}>{props.dialogsMessage[0].message}</div>
      </div>
    </div>
  )
}

export default MessagesArea;
