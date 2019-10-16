import React from "react";
import s from "./InputAnswer.module.css";
import {Field, reduxForm, reset} from 'redux-form'
import {maxLength15, requiredField} from "../../../../utils/validators/validators";
import {Textarea} from "../../../Common/FormControl/FormControl";


const Answer = props => {
    return (
        <form
            name={"dialogAnswer"}
            onSubmit={props.handleSubmit}
            className={s.inputAnswer}>
            <Field
                name={"newMessageBody"}
                className={s.textarea}
                component={Textarea}
                // rows="1"
                placeholder="Type your message..."
                validate={[requiredField, maxLength15]}
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
        props.addSendMessage(formData.newMessageBody);
    }
    return (
        <ReduxAnswer onSubmit={addMessage} />
    );
};

export default InputAnswer;