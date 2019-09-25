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
                }
            case "SET_USER_PHOTO":
                return {
                    ...state,
                    ...action.photo,
                }

            default:
                return state;
        }
    }
;
export default authReducer;

export const setAuthUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}});
export const setAuthUserPhoto = (photo) => ({type: SET_USER_PHOTO, photo});
