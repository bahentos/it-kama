import React from "react";
import s from "./ProfileInfo.module.css";
import UserAvatar from "../../Header/UserAvatar/UserAvatar";

const ProfileInfo = () => {
  return (
    <div className={s.main}>
      <div className={s.fonContent} />
      <div className={s.relative}>
        <UserAvatar width="120" textFonColor="white" userName="Tom Waits" first={false} />
      </div>
    </div>
  );
};

export default ProfileInfo;
