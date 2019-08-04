import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={s.main}>
      My posts
      <div className={s.postContainer}>
        <textarea />
        <div className={s.buttonContainer}>
          <div className={s.iconContainer}>
            <button className={s.icon1} />
            <button className={s.icon2} />
            <button className={s.icon3} />
          </div>
          <button className={s.add}>Post</button>
        </div>
      </div>
      <Post message="Hi, how are your?" />
      <Post message="I'm fine" />
    </div>
  );
};

export default MyPosts;
