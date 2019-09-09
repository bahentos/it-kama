import React from "react";
import { updateNewMessageActionCreator, addSendMessageActionCreator } from '../../../../redux/dialogsReducer';
import InputAnswer from "./InputAnswer";
import { connect } from 'react-redux';



let mapStateToProps = (state) => {
  return {
    newMessageBody: state.dialogsPage.newMessageBody,
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {dispatch(addSendMessageActionCreator())},
    changeMessage: (text) => {dispatch(updateNewMessageActionCreator(text))},
  }
};

const InputAnswerContainer = connect(mapStateToProps, mapDispatchToProps)(InputAnswer);


export default InputAnswerContainer;