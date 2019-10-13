import React from "react";
import {
  addPostActionCreator,
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
  return {
    messagesData: state.profilePage.messagesData,
    newPostText: state.profilePage.newPostText,
  }
}


const MyPostsContainer = connect(mapStateToProps, {addPostActionCreator})(MyPosts);

export default MyPostsContainer;
