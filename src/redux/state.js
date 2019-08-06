const state = {
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
    postData: [
      { id: 1, likeCount: 12 },
      { id: 2, likeCount: 24 },
    ],

    messagesData: [
      { id: 1, message: "Hi, how are your?" },
      { id: 2, message: "Everyone has one's own path" },
    ]
  }
};

export default state;
