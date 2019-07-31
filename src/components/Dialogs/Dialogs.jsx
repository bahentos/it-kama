import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog}>
          <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className={s.message}>{props.message}</div>
  )
}

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Andry" id="1" />
        <DialogItem name="Maxim" id="2" />
        <DialogItem name="Sveta" id="3" />
      </div>
      <div className={s.messagesItems}>
        <Message message="Hi!" />
        <Message message="Ne hi" />
        <Message message="Ai Ai" />
      </div>
    </div>
  );
};

export default Dialogs;
