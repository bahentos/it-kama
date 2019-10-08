import React from "react";
import Dialogs from './Dialogs';
import { connect } from "react-redux";
import {widthAuthRedirect} from "../../hoc/widthAuthRedirect";



let  AuthRedirectComponent = widthAuthRedirect(Dialogs);


let mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    
  }
};




const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;
