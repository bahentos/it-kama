const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const ADD_SEND_MESSAGE = "ADD_SEND_MESSAGE";

let initialState = {
    dialogsData: [
        {
            id: 0,
            name: "Tomas Mann",
            avatar: "/img/avatar-1.png",
            unread: 2,
            userMessages: [0, 1]
        },
        {
            id: 1,
            name: "Ernst Ham",
            avatar: "/img/avatar-2.png",
            unread: 0,
            userMessages: [2, 7]
        },
        {
            id: 2,
            name: "Mister Dool",
            avatar: "/img/avatar-3.png",
            unread: 4,
            userMessages: [4]
        },
        {
            id: 3,
            name: "John Little",
            avatar: "/img/avatar-4.png",
            unread: 8,
            userMessages: [3]
        },
        {
            id: 4,
            name: "Robin Good",
            avatar: "/img/avatar-5.png",
            unread: 1,
            userMessages: [5, 6]
        },
        {
            id: 5,
            name: "Richard Crosby",
            avatar: "/img/avatar-6.png",
            unread: 12,
            userMessages: [8, 9, 10]
        }
    ],

    dialogsMessage: [
        {
            id: 0,
            message:
                "We are planning to move with GrapQL api with Board section. What do you think on it"
        },
        {id: 1, message: "When you want it, it goes away too fast"},
        {id: 2, message: "Live without regrets"}
        // { id: 3, message: "Follow your heart" },
        // { id: 4, message: "Lost time is never found again" },
        // { id: 5, message: "Respect the past, create the future!" },
        // { id: 6, message: "We are planning to move with GrapQL api with Board section. What do you think on it" },
        // { id: 7, message: "I mean for scrum board. A part from this, I have design some layouts in Sketch for it. Did you get chance to see those?" },
        // { id: 8, message: "Yeah, that's really sounds good. I loved it. Can you please connet with Mia for further implementation?" },
        // { id: 9, message: "I am scheduling a meeting with Team today at 5:00PM. Hope you are available." },
        // { id: 10, message: "I also need your assistance for GraphQL api structuring. Are you gonna make APIs in Laravel for it?" },
    ],
    newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_NEW_MESSAGE_BODY":
            return {
                ...state,
                newMessageBody: action.newBody
            };

        case "ADD_SEND_MESSAGE":
            let body = state.newMessageBody;
            if (body !== "") {
                return {
                    ...state,
                    newMessageBody: "",
                    dialogsMessage: [...state.dialogsMessage, {id: 11, message: body}]
                }

            }
            return state;

        default:
            return state;
    }
};

export default dialogsReducer;

export const updateNewMessageActionCreator = text => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    newBody: text
});
export const addSendMessageActionCreator = () => ({type: ADD_SEND_MESSAGE});
