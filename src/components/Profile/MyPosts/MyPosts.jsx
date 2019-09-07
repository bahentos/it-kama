import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = props => {
  

  let posts = props.messagesData.map(post => (
    <Post
      key={post.id}
      userName={post.name}
      message={post.message}
      likeCount={post.likeCount}
    />
  ));

  let newPostElement = React.createRef();

  let onAddNewPost = () => {
    props.addPost();
  };

  let onChangePost = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text)
  };

  return (
    <div className={s.main}>
      My posts
      <div className={s.postContainer}>
        <textarea
          onChange={onChangePost}
          ref={newPostElement}
          value={props.newPostText}
        />
        <div className={s.buttonContainer}>
          <div className={s.iconContainer}>
            <button className={s.icon1} />
            <button className={s.icon2} />
            <button className={s.icon3} />
          </div>
          <button onClick={onAddNewPost} className={s.add}>
            Post
          </button>
        </div>
      </div>
      {posts}
    </div>
  );
};

export default MyPosts;
