import React from "react";
import s from "./Post.module.css";

const Post = props => {
  return (
    <div className={s.item}>
      <div className={s.avatarContainer}>
        <img
          src="https://hornews.com/images/news_large/c1d4b2b8ec608ea72764c5678816d5c9.jpg"
          alt=""
        />
        <span>John Travolta</span>
      </div>
      <div>{props.message}</div>
      <div className={s.likeGroup}>
        <div className={s.likeContainer}>
          <button className={s.like} />
          <span>Like</span>
        </div>
        <div className={s.shareContainer}>
          <button className={s.share}></button>
          <span>Share</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
