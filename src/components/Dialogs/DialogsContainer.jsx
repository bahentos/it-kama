import React from "react";
import Dialogs from './Dialogs';
import StoreContext from '../../store-context';

const DialogsContainer = () => {
  
  return <StoreContext.Consumer>
    { store => {
        let state = store.getState();

        return <Dialogs dialogsData={state.dialogsPage.dialogsData}/>
      }
    }

  </StoreContext.Consumer>
}

export default DialogsContainer;
