import React from "react";
import InputAnswer from "./InputAnswer";
import { connect } from 'react-redux';
import {addSendMessage} from "../../../../redux/dialogsReducer";



let mapStateToProps = (state) => {
  return {
    newMessageBody: state.dialogsPage.newMessageBody,
  }
};


const InputAnswerContainer = connect(mapStateToProps, {addSendMessage, })(InputAnswer);


export default InputAnswerContainer;