import React from "react";
import Dialogs from './Dialogs';
import { connect } from "react-redux";
import {widthAuthRedirect} from "../../hoc/widthAuthRedirect";
import {compose} from "redux";



let mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    
  }
};


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    widthAuthRedirect
)(Dialogs);
