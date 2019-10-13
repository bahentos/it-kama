import React from 'react';
import {connect} from "react-redux";
import Login from "./Login";
import {submitLogin} from "../../redux/authReducer";


let mapStateToProps = (state) => {
   return {
    isAuth: state.auth.isAuth
   }
}

const LoginContainer =  connect(mapStateToProps, {submitLogin})(Login);
export default LoginContainer