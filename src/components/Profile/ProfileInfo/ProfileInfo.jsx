import React from "react";
import s from "./ProfileInfo.module.css";
import defaultAvatar from "../../../Assets/img/userDefaults.png";
import Preloader from '../../Common/Preloader/Preloader';
import ProfileStatus from "../ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  } 
    return (
      <div className={s.main}>
        <img
                className={s.userAvatar}
                src={props.profile.photos.large != null ? props.profile.photos.large :  defaultAvatar}
                alt="userAvatar"
              />
            <div className={s.fullName}>{props.profile.fullName}</div>
            <ProfileStatus status={"Hello!"} />
            <div className={s.isFindJob}>{props.profile.ookingForAJob ? "Не ищет работу" : "Ищет работу"}</div>
            <div className={s.jobDescriptions}>{props.profile.lookingForAJobDescription}</div>
            <div className={s.about}>{props.profile.aboutMe}</div>
            <div className={s.contacts}>Контакты
            <ul>
              <li>{props.profile.contacts.facebook}</li>
              <li>{props.profile.contacts.website}</li>
              <li>{props.profile.contacts.vk}</li>
              <li>{props.profile.contacts.twitter}</li>
              <li>{props.profile.contacts.instagram}</li>
              <li>{props.profile.contacts.github}</li>
              <li>{props.profile.contacts.mainLink}</li>
            </ul>
            </div>
  
      </div>
    );
  }

export default ProfileInfo;
