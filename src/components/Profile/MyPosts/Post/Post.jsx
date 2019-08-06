import React from "react";
import s from "./Post.module.css";


const Post = props => {

  let imgUrl = `url("${props.avatar}")`;
  
  return (
    <div className={s.item}>
      <div className={s.avatarContainer}>
        <div className={s.avatarImg} style={{backgroundImage: imgUrl}}></div>
        <span>{props.userName}</span>
      </div>
      <div>{props.message}</div>
      <div className={s.likeGroup}>
        <div className={s.likeContainer}>
          <button className={s.like} />
          <span>Like({props.likeCount})</span>
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
