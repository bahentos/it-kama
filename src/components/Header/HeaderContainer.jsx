import React from "react";
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData, setAuthUserPhoto} from "../../redux/authReducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/auth/me`,
                {
                    withCredentials: true
                }
            )
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    this.props.setAuthUserData(id, email, login);
                }
                return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${response.data.data.id}`);
            }).then(response => {
            this.props.setAuthUserPhoto(response.data.photos.large);
        })
    }

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

export default connect(mapStateToProps, {setAuthUserData, setAuthUserPhoto})(HeaderContainer);
