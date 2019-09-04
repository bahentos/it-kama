import React from "react";
import s from "./InputAnswer.module.css";
import { updateNewMessageActionCreator, addSendMessageActionCreator } from '../../../../redux/dialogsReducer';
import InputAnswer from "./InputAnswer";
import StoreContext from "../../../../store-context";

const InputAnswerContainer = () => {
  return <StoreContext.Consumer>
    { store => {
        let state = store.getState();

        let addMessage = () => {
          store.dispatch(addSendMessageActionCreator());
        }
      
        let onChangeMessage = (text) => {
          store.dispatch(updateNewMessageActionCreator(text));
        };
        
        return (
            <InputAnswer 
            addMessage={addMessage} 
            changeMessage={onChangeMessage}
            newMessageBody={state.dialogsPage.newMessageBody}
            />
          )
      }
    }
    </StoreContext.Consumer>
  
};

export default InputAnswerContainer;

// style={{(changeMarker) ? backgroundColor: "#e91a62" : backgroundColor: "#e91a62"}}