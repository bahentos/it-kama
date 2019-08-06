import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { futimes } from "fs";



const MyPosts = (props) => {
  let posts = props.messagesData.map( post => <Post userName={post.name} message={post.message} likeCount={post.likeCount} />)
  
  let newPostElement = React.createRef();

  let addNewPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = "";
  }

  return (
    <div className={s.main}>
      My posts
      <div className={s.postContainer}>
        <textarea ref={newPostElement} />
        <div className={s.buttonContainer}>
          <div className={s.iconContainer}>
            <button className={s.icon1} />
            <button className={s.icon2} />
            <button className={s.icon3} />
          </div>
          <button onClick={ addNewPost } className={s.add}>Post</button>
        </div>
      </div>
      {posts}
    </div>
  );
};

export default MyPosts;
