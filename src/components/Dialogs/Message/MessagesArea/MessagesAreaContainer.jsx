import React from "react";
import MessagesArea from './MessagesArea';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
  return {
    dialogsMessage: state.dialogsPage.dialogsMessage,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {

  }
}

const MessagesAreaContainer = connect(mapStateToProps, mapDispatchToProps)(MessagesArea);

export default MessagesAreaContainer;
