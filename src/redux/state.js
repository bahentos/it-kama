const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";

let store = {
  _state: {
    dialogsPage: {
      dialogsData: [
        { id: 0, name: "Tomas Mann", avatar: "/img/avatar-1.png", unread: 2, userMessages: [0, 1]},
        { id: 1, name: "Ernst Ham", avatar: "/img/avatar-2.png", unread: 0, userMessages: [2, 7] },
        { id: 2, name: "Mister Dool", avatar: "/img/avatar-3.png", unread: 4, userMessages: [4] },
        { id: 3, name: "John Little", avatar: "/img/avatar-4.png", unread: 8, userMessages: [3] },
        { id: 4, name: "Robin Good", avatar: "/img/avatar-5.png", unread: 1, userMessages: [5, 6] },
        {
          id: 5,
          likeCount: 15,
          name: "Richard Crosby",
          avatar: "/img/avatar-6.png",
          unread: 12, userMessages: [8, 9, 10]
        }
      ],

      dialogsMessage: [
        { id: 0, message: "We are planning to move with GrapQL API with Board section. What do you think on it" },
        { id: 1, message: "When you want it, it goes away too fast" },
        { id: 2, message: "Live without regrets" },
        { id: 3, message: "Follow your heart" },
        { id: 4, message: "Lost time is never found again" },
        { id: 5, message: "Respect the past, create the future!" },
        { id: 6, message: "We are planning to move with GrapQL API with Board section. What do you think on it" },
        { id: 7, message: "I mean for scrum board. A part from this, I have design some layouts in Sketch for it. Did you get chance to see those?" },
        { id: 8, message: "Yeah, that's really sounds good. I loved it. Can you please connet with Mia for further implementation?" },
        { id: 9, message: "I am scheduling a meeting with Team today at 5:00PM. Hope you are available." },
        { id: 10, message: "I also need your assistance for GraphQL API structuring. Are you gonna make APIs in Laravel for it?" },
      ]
    },

    mypostPage: {
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
      newPostText: ""
    }
  },
  _callSubscriber() {},

  // dispatch(action) {
  //   switch (action.type) {
  //     case "ADD-POST":
  //       let newPost = {
  //         id: 3,
  //         message: this._state.mypostPage.newPostText,
  //         likeCount: 0
  //       };
  //       this._state.mypostPage.messagesData.push(newPost);
  //       this._state.mypostPage.newPostText = "";
  //       this._callSubscriber(this._state);
  //       break;

  //     case "UPDATE-POST-TEXT":
  //       this._state.mypostPage.newPostText = action.newText;
  //       this._callSubscriber(this._state);
  //       break;

  //     // default:
  //     //   break;
  //   }
  // },

  dispatch(action) {
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 3,
        message: this._state.mypostPage.newPostText,
        likeCount: 0
      };
      this._state.mypostPage.messagesData.push(newPost);
      this._state.mypostPage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-POST-TEXT") {
      this._state.mypostPage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
  getState() {
    return this._state;
  }
}

export const addPostActionCreator = () => {
  return {type: ADD_POST};
}
export const updatePostActionCreator = (text) => {
  return {type: UPDATE_POST_TEXT, newText: text};
}

window.state = store;
export default store;
