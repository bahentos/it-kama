import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from 'react-router-dom';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

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


const Dialogs = () => {
  let dialogs = dialogsData.map( name => <DialogItem name={name.name} id={name.id} />);
  let messages = dialogsMessage.map( messages => <Message message={messages.message} id={messages.id} />);
  
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
