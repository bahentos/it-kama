import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const postData = [
  {id: 1, likeCount: 12, name: "Tomas Mann", avatar: "img/avatar-1.png"},
  {id: 2, likeCount: 24, name: "Ernst Ham", avatar: "img/avatar-2.png"},
  {id: 3, likeCount: 31, name: "Mister Dool", avatar: "img/avatar-3.png"},
  {id: 4, likeCount: 88, name: "John Little", avatar: "img/avatar-4.png"},
  {id: 5, likeCount: 41, name: "Robin Good", avatar: "img/avatar-5.png"},
  {id: 6, likeCount: 15, name: "Richard Crosby", avatar: "img/avatar-6.png"}
]

const messagesData = [
  {id: 1, message: "Hi, how are your?"},
  {id: 2, message: "Everyone has one's own path"},
  {id: 3, message: "If you wish to be loved, love!"},
  {id: 4, message: "Never say never"},
  {id: 5, message: "Everyone sees the world in one's own way"},
  {id: 6, message: "Never look back"}
]


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
      <Post userName={postData[0].name} message={messagesData[0].message} likeCount={postData[0].likeCount} avatar={postData[0].avatar} />
      <Post userName={postData[1].name} message={messagesData[1].message} likeCount={postData[1].likeCount} avatar={postData[1].avatar} />
    </div>
  );
};

export default MyPosts;
