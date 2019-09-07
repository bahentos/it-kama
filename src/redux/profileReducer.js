const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";


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
}

const profileReducer = (state = initialState, action) => {
  let stateCopy = {...state};
    switch (action.type) {
      
      case "ADD-POST":
        let newPost = {
          id: 3,
          message: state.newPostText,
          likeCount: 0
        };
        stateCopy.messagesData = [...state.messagesData]
        stateCopy.messagesData.push(newPost);
        stateCopy.newPostText = "";
        return stateCopy;

      case "UPDATE-POST-TEXT":
        stateCopy.newPostText = action.newText;
        return stateCopy;
    default:
      return state;
  }
};
export default profileReducer;

export const addPostActionCreator = () => ({type: ADD_POST});
export const updatePostActionCreator = (text) => ({type: UPDATE_POST_TEXT, newText: text});