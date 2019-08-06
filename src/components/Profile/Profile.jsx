import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={s.main}>
      <ProfileInfo />
      <MyPosts messagesData={props.messagesData} addPost={props.addPost} />
    </div>
  );
};

export default Profile;
