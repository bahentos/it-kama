import React from "react";
import s from "./InputAnswer.module.css";


const InputAnswer = props => {


  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.addMessage();
  }

  let onChangeMessage = () => {
    let text = newMessageElement.current.value;
    props.changeMessage(text);
  };
  
  return (
    <div className={s.inputAnswer}>
      <textarea
        onChange={onChangeMessage}
        ref={newMessageElement}
        rows="1"
        placeholder="Type your message..."
        value={props.newMessageBody}
      ></textarea>
      <button 
       onClick={addMessage} ></button>
    </div>
  );
};

export default InputAnswer;

// style={{(changeMarker) ? backgroundColor: "#e91a62" : backgroundColor: "#e91a62"}}