import {usersAPI} from "../api/API";

const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";
const SET_USERS_PROFILE = "SET-USERS-PROFILE";
const SET_USER_AUTH = "SET-USER-AUTH";


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
    { id: 2, likeCount: 24, message: "Everyone has one's own path" }
  ],
  newPostText: "",
  profile: null,
  userAuth: null,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
      
      case "ADD-POST":
        let newPost = state.newPostText;
        return {
          ...state,
          newPostText: "",
          messagesData: [
            ...state.messagesData, 
            { id: 3, message: newPost, likeCount: 0 }
          ],
        };
      case "UPDATE-POST-TEXT":
        return {
          ...state, newPostText: action.newText
        };

      case "SET-USERS-PROFILE":
        return {
          ...state, profile: action.profile
        };

        case "SET-USER-AUTH":
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


export const setProfile = (userId) => {
  return (dispatch) => {
    usersAPI.setUserProfile(userId).then(data => {
      dispatch(setUsersProfile(data))
    });
  }
}


export default profileReducer;