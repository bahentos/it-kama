const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";
const SET_USERS_PROFILE = "SET-USERS-PROFILE";


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
}

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
        }
      case "UPDATE-POST-TEXT":
        return {
          ...state, newPostText: action.newText
        }
      case "SET-USERS-PROFILE":
        return {
          ...state, profile: action.profile
        }
    default:
      return state;
  }
};
export default profileReducer;

export const addPostActionCreator = () => ({type: ADD_POST});
export const updatePostActionCreator = (text) => ({type: UPDATE_POST_TEXT, newText: text});
export const setUsersProfile = (profile) => ({type: SET_USERS_PROFILE, profile});