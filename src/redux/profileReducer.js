import {profileAPI, usersAPI} from "../api/API";

const ADD_POST = "ADD_POST";
const UPDATE_POST_TEXT = "UPDATE_POST_TEXT";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";
const SET_USER_AUTH = "SET_USER_AUTH";
const SET_STATUS = "SET_STATUS";


let initialState = {
    messagesData: [
        {
            id: 1,
            likeCount: 12,
            message: `Pedestrians running for shelter into the market and under the portico
    of St. Paul's Church, where there are already several people, among them alady and her daughter in evening dress.
    They are all peering out gloomily at the rain, except one man with hisback turned to the rest, who seems wholly preoccupied with a notebookin which he is writing busily.
    `
        },
        {id: 2, likeCount: 24, message: "Everyone has one's own path"}
    ],
    newPostText: "",
    profile: null,
    userAuth: null,
    status: "",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case "ADD_POST":
            let newPost = state.newPostText;
            return {
                ...state,
                newPostText: "",
                messagesData: [
                    ...state.messagesData,
                    {id: 3, message: newPost, likeCount: 0}
                ],
            };
        case "UPDATE_POST_TEXT":
            return {
                ...state, newPostText: action.newText
            };

        case "SET_USERS_PROFILE":
            return {
                ...state, profile: action.profile
            };

        case "SET_STATUS":
          if (action.status != null) {
            return {
              ...state, status: action.status
            }
          } else {
            return {
              ...state, status: "Здесь должен быть ваш статус",
            }
          }


        case "SET_USER_AUTH":
            return {
                ...state, userAuth: action.userId
            };
        default:
            return state;
    }
};


export const addPostActionCreator = () => ({type: ADD_POST});
export const updatePostActionCreator = (text) => ({type: UPDATE_POST_TEXT, newText: text});
export const setUsersProfile = (profile) => ({type: SET_USERS_PROFILE, profile});
export const setUserAuth = (userId) => ({type: SET_USER_AUTH, userId});
export const setStatus = (status) => ({type: SET_STATUS, status});


export const setProfile = (userId) => {
    return (dispatch) => {
        profileAPI.setUserProfile(userId).then(data => {
            dispatch(setUsersProfile(data))
        });
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(data => {
            dispatch(setStatus(data))
        });
    }
}

export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
      }
    });
  }
}


export default profileReducer;