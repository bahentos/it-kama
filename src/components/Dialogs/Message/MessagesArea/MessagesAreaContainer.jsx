import React from "react";
import MessagesArea from './MessagesArea';


const MessagesAreaContainer = (props) => {
  let state = props.store.getState();
  return (
    <MessagesArea  dialogsMessage={state.dialogsPage.dialogsMessage} />
  )
}

export default MessagesAreaContainer;
