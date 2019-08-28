const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";

const profileReducer = (state, action) => {
    switch (action.type) {
      case "ADD-POST":
        let newPost = {
          id: 3,
          message: state.newPostText,
          likeCount: 0
        };
        state.messagesData.push(newPost);
        state.newPostText = "";
        return state;

      case "UPDATE-POST-TEXT":
        state.newPostText = action.newText;
        return state;
    default:
      return state;
  }
};
export default profileReducer;

export const addPostActionCreator = () => ({type: ADD_POST});
export const updatePostActionCreator = (text) => ({type: UPDATE_POST_TEXT, newText: text});