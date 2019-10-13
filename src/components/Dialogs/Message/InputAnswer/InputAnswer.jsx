import React from "react";
import s from "./InputAnswer.module.css";
import {Field, reduxForm, reset} from 'redux-form'


const Answer = props => {
    return (
        <form
            name={"dialogAnswer"}
            onSubmit={props.handleSubmit}
            className={s.inputAnswer}>
            <Field
                name={"newMessageBody"}
                className={s.textarea}
                type={"textarea"}
                component={"input"}
                rows="1"
                placeholder="Type your message..."
            />
            <button className={s.btn}></button>
        </form>
    )
}


const afterSubmit = (result, dispatch) =>
    dispatch(reset('dialogAnswerForm'));

const ReduxAnswer = reduxForm({form: 'dialogAnswerForm', onSubmitSuccess: afterSubmit,})(Answer)


const InputAnswer = props => {

    let addMessage = (formData) => {
        if (formData.newMessageBody != undefined) {
            props.addSendMessage(formData.newMessageBody);
        }
    }
    return (
        <ReduxAnswer onSubmit={addMessage} />
    );
};

export default InputAnswer;