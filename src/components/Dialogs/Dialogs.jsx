import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from 'react-router-dom';

const dialogsData = [
  {id: 1, name: "Andry"},
  {id: 2, name: "Maxim"},
  {id: 3, name: "Sveta"},
  {id: 4, name: "John"},
  {id: 5, name: "Pablo"},
  {id: 6, name: "Jimm"},
]
const dialogsMessage = [
  {id: 1, message: "Hi!"},
  {id: 2, message: "Ne hi"},
  {id: 3, message: "Ai Ai"},
  {id: 4, message: "Bla, Bla, Bla"},
  {id: 5, message: "Alarm!"},
  {id: 6, message: "Rock&Roll"},
]



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
  let dialogs = dialogsData.map( name => <DialogItem name={name.name} id={name.id} />);
  let messages = dialogsMessage.map( messages => <DialogItem name={messages.message} id={messages.id} />);
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogs}
      </div>
      <div className={s.messagesItems}>
        {messages}
      </div>
    </div>
  );
};

export default Dialogs;
