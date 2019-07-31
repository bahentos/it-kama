import React from "react";
import s from "./UserAvatar.module.css";
import avatarimg from "./img/avatar.jpg";

const UserName = (props) => {
  return (
    <span style={{backgroundColor: props.textFonColor}} className={s.nameSpan}>{props.userName}</span>
  )
}

const AvatarImg = (props) => {
  return (
    <img src={props.img} className={s.avatar}/>
  )
}

const UserAvatar = (props) => {
  let a = <UserName textFonColor="white" userName="Tom Waits" />;
  let b = <AvatarImg img={avatarimg} />;
  return (
    <div className={s.avatarCont}>
      {(props.first)? a : b}
      {(props.first)? b : a} 
      </div>
  )
}

export default UserAvatar;
