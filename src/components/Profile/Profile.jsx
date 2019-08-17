import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = props => {
  return (
    <div className={s.main}>
      <ProfileInfo />
      <MyPosts
        dispatch={props.dispatch}
        newPostText={props.newPostText}
        messagesData={props.messagesData}
      />
    </div>
  );
};

export default Profile;
