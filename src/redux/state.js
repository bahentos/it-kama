let store = {
  _state: {
    dialogsPage: {
      dialogsData: [
        { id: 1, name: "Tomas Mann", avatar: "img/avatar-1.png" },
        { id: 2, name: "Ernst Ham", avatar: "img/avatar-2.png" },
        { id: 3, name: "Mister Dool", avatar: "img/avatar-3.png" },
        { id: 4, name: "John Little", avatar: "img/avatar-4.png" },
        { id: 5, name: "Robin Good", avatar: "img/avatar-5.png" },
        {
          id: 6,
          likeCount: 15,
          name: "Richard Crosby",
          avatar: "img/avatar-6.png"
        }
      ],

      dialogsMessage: [
        { id: 1, message: "Truth is more of a stranger than fiction" },
        { id: 2, message: "When you want it, it goes away too fast" },
        { id: 3, message: "Live without regrets" },
        { id: 4, message: "Follow your heart" },
        { id: 5, message: "Lost time is never found again" },
        { id: 6, message: "Respect the past, create the future!" }
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
  addPost(postMessage) {
    let newPost = {
      id: 3,
      message: this._state.mypostPage.newPostText,
      likeCount: 0
    };
    this._state.mypostPage.messagesData.push(newPost);
    this._state.mypostPage.newPostText = "";
    this._callSubscriber(this._state);
  },
  updatePostText(newText) {
    this._state.mypostPage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
  getState() {
    return this._state;
  },
};

window.state = store;
export default store;
