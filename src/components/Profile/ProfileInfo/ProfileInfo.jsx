import React from 'react';
import s from "./ProfileInfo.module.css";
import UserAvatar from '../../Header/UserAvatar/UserAvatar';

const ProfileInfo = () => {
  return (
    <div className={s.main}>
      <div className={s.fonContent}>
      </div>
      <div className={s.relative}>
        <UserAvatar first={false} />
      </div>
    </div>
  )
}

export default ProfileInfo;