import React from 'react';
<<<<<<< HEAD
import {Field, reduxForm, reset} from 'redux-form';
import {requiredField} from "../../utils/validators/validators";
import s from './Login.module.css';
import {Input} from "../Common/FormControl/FormControl";


const LoginForm = (props) => {
    return (
        <form name={"login"} className={s.form} onSubmit={props.handleSubmit}>
            <div className={s.container}>
                <Field name={"email"}
                       type={"text"}
                       labelText="Логин"
                       component={Input}
                       validate={[requiredField]}
                />
                <Field name={"password"}
                       type="password"
                       labelText="Пароль"
                       component={Input}
                       validate={[requiredField]}
                />
                <div>
                    <Field name={"rememberMe"}
                           id="rememberMe"
                           className={s.checkbox}
                           component={"input"} t
                           type={"checkbox"}/>
                    <label className={s.checkboxLabel} htmlFor={"rememberMe"}>Remember me</label>
                </div>
                {props.error ? <div style={{color: "red", padding: "5px"}}>ERROR</div> : null}
                <div className={s.btnContainer}>
                    <button className={s.submit}>Login</button>
                </div>
            </div>
        </form>

    )
}

const afterSubmit = (result, dispatch) =>
    dispatch(reset('login'));

const LoginReduxForm = reduxForm({form: 'login', onSubmitSuccess: afterSubmit,})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        let {email, password, rememberMe} = formData;
        props.submitLogin(email, password, rememberMe)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
=======


const Login = (props) => {
    return <h1>Login</h1>
>>>>>>> parent of e807cc5... Lesson 75: redux-form введение (login)
}

export default Login;