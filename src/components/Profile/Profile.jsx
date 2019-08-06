import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={s.main}>
      <ProfileInfo />
      <MyPosts postData={props.postData} messagesData={props.messagesData} />
    </div>
  );
};

export default Profile;
