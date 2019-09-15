import React from "react";
import s from "./ProfileInfo.module.css";
import defaultAvatar from "../../../Assets/img/user.png";
import Preloader from '../../Common/Preloader/Preloader';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  } 
    return (
      <div className={s.main}>
        <img
                className={s.userAvatar}
                src={props.profile.photos.large}
                alt="userAvatar"
              />
            <div className={s.fullName}>Вася Пупкин</div>
            <div className={s.isFindJob}>Ищет работу</div>
            <div className={s.jobDescriptions}>Ищу такую-то работу</div>
  
      </div>
    );
  }

export default ProfileInfo;
