import React from "react";
import s from "./InputAnswer.module.css";
import { updateNewMessageActionCreator, addSendMessageActionCreator } from '../../../../redux/dialogsReducer';


const InputAnswer = props => {


  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.dispatch(addSendMessageActionCreator());
  }

  let onChangeMessage = () => {
    let text = newMessageElement.current.value;
    props.dispatch(updateNewMessageActionCreator(text));
  };
  
  return (
    <div className={s.inputAnswer}>
      <textarea
        onChange={onChangeMessage}
        ref={newMessageElement}
        rows="1"
        placeholder="Type your message..."
        value={props.dialogsPage.newMessageBody}
      ></textarea>
      <button 
       onClick={addMessage} ></button>
    </div>
  );
};

export default InputAnswer;

// style={{(changeMarker) ? backgroundColor: "#e91a62" : backgroundColor: "#e91a62"}}