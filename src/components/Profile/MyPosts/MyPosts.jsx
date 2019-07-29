import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My posts
        <div>
        <textarea></textarea>
        <button>Add</button>
      </div>
      <Post message='Hi, how are your?' />
      <Post message="I'm fine" />
    </div>
  )
}

export default MyPosts;