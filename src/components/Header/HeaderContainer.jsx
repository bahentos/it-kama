import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {loginCheck, setAuthUserData, setAuthUserPhoto} from "../../redux/authReducer";
import {setUserAuth} from "../../redux/profileReducer";

class HeaderContainer extends React.Component {

    componentDidMount() {this.props.loginCheck()}

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    email: state.auth.email,
    photo: state.auth.photo,
    id: state.auth.id,
});

export default connect(mapStateToProps, {setAuthUserData, setAuthUserPhoto, setUserAuth, loginCheck})(HeaderContainer);
