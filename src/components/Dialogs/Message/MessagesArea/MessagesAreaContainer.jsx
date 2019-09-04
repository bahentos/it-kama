import React from "react";
import MessagesArea from './MessagesArea';
import StoreContext from "../../../../store-context";


const MessagesAreaContainer = () => {
  return <StoreContext.Consumer>
    { store => {
        let state = store.getState();
        return <MessagesArea  dialogsMessage={state.dialogsPage.dialogsMessage} />
      }
    }
    </StoreContext.Consumer>
  
}

export default MessagesAreaContainer;
