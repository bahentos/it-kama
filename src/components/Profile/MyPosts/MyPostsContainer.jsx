import React from "react";
import {
  addPostActionCreator,
  updatePostActionCreator
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = props => {
  let state = props.store.getState();

  let addNewPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let onChangePost = text => {
    let action = updatePostActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <MyPosts
      updateNewPostText={onChangePost}
      addPost={addNewPost}
      messagesData={state.mypostPage.messagesData}
      newPostText={state.mypostPage.newPostText}
    />
  );
};

export default MyPostsContainer;
