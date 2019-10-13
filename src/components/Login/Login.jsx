import React from 'react';
import { Field, reduxForm } from 'redux-form'


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"email"} type={"text"} component={"input"} placeholder={"login"}/>
            </div>
            <div>
                <Field name={"password"} type={"password"} component={"input"} placeholder={"Password"}/>
            </div>
            <div>
                <Field name={"rememberMe"} component={"input"} type={"checkbox"}/>
                <label  htmlFor={"rememberMe"}><span>Remember me</span></label>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>

    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        let {email, password, rememberMe} = formData;
        props.submitLogin(email, password, rememberMe)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login;