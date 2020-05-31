import {authAPI, profileAPI} from "../api/API";
import {setUserAuth} from "./profileReducer";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";
const SET_USER_PHOTO = "SET_USER_PHOTO";


let initialState = {
    id: null,
    email: null,
    login: null,
    photo: null,
    isAuth: false,
}


const authReducer = (state = initialState, action) => {
        switch (action.type) {

            case "SET_USER_DATA":
                return {
                    ...state,
                    ...action.data,
                    isAuth: true,
                };
            case "SET_USER_PHOTO":
                return {
                    ...state,
                    ...action.photo,
                };

            default:
                return state;
        }
    }
;
export default authReducer;

export const setAuthUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}});
export const setAuthUserPhoto = (photo) => ({type: SET_USER_PHOTO, photo});


export const loginCheck = () => {
    return (dispatch) => {
        authAPI.me().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setAuthUserData(id, email, login));
                dispatch(setUserAuth(id));
            }
            return profileAPI.userPhotoCheck(data.data.id)
        }).then(data => {
            dispatch(setAuthUserPhoto(data.photos.large));
        })
    }
};


export const submitLogin = (email, password, rememberMe) => (dispatch) => {

    let action = stopSubmit("login", {_error: "Email is wrong"});
    dispatch(action);
    debugger
    return;
        authAPI.login(email, password, rememberMe).then(data => {
            if (data.resultCode === 0) {
                return authAPI.me().then(data => {
                    if (data.resultCode === 0) {
                        let {id, email, login} = data.data;
                        dispatch(setAuthUserData(id, email, login));
                        dispatch(setUserAuth(id));
                    } else {
                        let action = stopSubmit("login", {email: "Email is wrong"});
                        dispatch(action);
                    }
                    return profileAPI.userPhotoCheck(data.data.id)
                }).then(data => {
                    dispatch(setAuthUserPhoto(data.photos.large));
                })
            }
        })
    }
