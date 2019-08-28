const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const ADD_SEND_MESSAGE = "ADD_SEND_MESSAGE";

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_NEW_MESSAGE_BODY":
      state.newMessageBody = action.newBody;
      return state;

    case "ADD_SEND_MESSAGE":
      if (state.newMessageBody === "") {
        return null;
      } else {
        let body = state.newMessageBody;
        state.newMessageBody = "";
        state.dialogsMessage.push({ id: 11, message: body });
      }
      return state;

    default:
        return state;
  }
};

export default dialogsReducer;

export const updateNewMessageActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_BODY, newBody: text});
export const addSendMessageActionCreator = () => ({type: ADD_SEND_MESSAGE});