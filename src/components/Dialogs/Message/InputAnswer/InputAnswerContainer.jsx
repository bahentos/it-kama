import React from "react";
import s from "./InputAnswer.module.css";
import { updateNewMessageActionCreator, addSendMessageActionCreator } from '../../../../redux/dialogsReducer';
import InputAnswer from "./InputAnswer";
import { connect } from 'react-redux';



let mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsPage.newMessageBody,
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

// style={{(changeMarker) ? backgroundColor: "#e91a62" : backgroundColor: "#e91a62"}}