import React from "react";
import Dialogs from './Dialogs';
import { connect } from "react-redux";



let mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
    isAuth: state.auth.isAuth,
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    
  }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
