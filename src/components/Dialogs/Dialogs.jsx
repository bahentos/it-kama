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
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
      </div>
      <div className={s.messagesItems}>
        <Message message={dialogsMessage[0].message} />
        <Message message={dialogsMessage[1].message} />
        <Message message={dialogsMessage[2].message} />
      </div>
    </div>
  );
};

export default Dialogs;
