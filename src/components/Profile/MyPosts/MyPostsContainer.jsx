import React from "react";
import {
  addPostActionCreator,
  updatePostActionCreator
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from '../../../store-context';

const MyPostsContainer = () => {
  
  return <StoreContext.Consumer>
    { store => {
        let state = store.getState();

        let addNewPost = () => {
          store.dispatch(addPostActionCreator());
        };
      
        let onChangePost = text => {
          let action = updatePostActionCreator(text);
          store.dispatch(action);
        };
      
        return (
          <MyPosts
            updateNewPostText={onChangePost}
            addPost={addNewPost}
            messagesData={state.mypostPage.messagesData}
            newPostText={state.mypostPage.newPostText}
          />
        );
      }

    }
    </StoreContext.Consumer>
};

export default MyPostsContainer;
