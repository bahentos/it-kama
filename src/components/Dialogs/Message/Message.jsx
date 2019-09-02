import React from "react";
import s from "./Message.module.css";
import MessagesHeader from "./MessagesHeader/MessagesHeader";
import MessagesAreaContainer from './MessagesArea/MessagesAreaContainer';
import InputAnswerContainer from './InputAnswer/InputAnswerContainer';

const Message = props => {
  return (
    <div className={s.messagesItems}>
      <MessagesHeader />
      <MessagesAreaContainer store={props.store} />
      <InputAnswerContainer
        store={props.store}
      />
    </div>
  );
};

export default Message;
