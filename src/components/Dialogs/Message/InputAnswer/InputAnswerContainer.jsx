import React from "react";
import s from "./InputAnswer.module.css";
import { updateNewMessageActionCreator, addSendMessageActionCreator } from '../../../../redux/dialogsReducer';
import InputAnswer from "./InputAnswer";

const InputAnswerContainer = props => {
  let state = props.store.getState();

  let addMessage = () => {
    props.store.dispatch(addSendMessageActionCreator());
  }

  let onChangeMessage = (text) => {
    props.store.dispatch(updateNewMessageActionCreator(text));
  };
  
  return (
      <InputAnswer 
      addMessage={addMessage} 
      changeMessage={onChangeMessage}
      newMessageBody={state.dialogsPage.newMessageBody}
      />
    )
};

export default InputAnswerContainer;

// style={{(changeMarker) ? backgroundColor: "#e91a62" : backgroundColor: "#e91a62"}}