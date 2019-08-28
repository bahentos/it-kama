import React from "react";
import s from "./Message.module.css";
import MessagesHeader from "./MessagesHeader/MessagesHeader";
import InputAnswer from "./InputAnswer/InputAnswer";
import MessagesArea from "./MessagesArea/MessagesArea";

const Message = props => {
  return (
    <div className={s.messagesItems}>
      <MessagesHeader />
      <MessagesArea dialogsPage={props.dialogsPage} />
      <InputAnswer
        dialogsPage={props.dialogsPage}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default Message;
