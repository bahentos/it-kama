import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from 'react-router-dom';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';



const Dialogs = (props) => {
  let dialogs = props.dialogsData.map( name => <DialogItem name={name.name} id={name.id} />);
  let messages = props.dialogsMessage.map( messages => <Message message={messages.message} id={messages.id} />);
  
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
