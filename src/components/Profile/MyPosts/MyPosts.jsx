import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { futimes } from "fs";



const MyPosts = (props) => {
  let posts = props.postData.map((post, index) => <Post userName={post.name} message={props.messagesData[index].message} likeCount={post.likeCount} avatar={post.avatar} />)
  
  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
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
          <button onClick={ addPost } className={s.add}>Post</button>
        </div>
      </div>
      {posts}
    </div>
  );
};

export default MyPosts;
