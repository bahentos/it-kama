import React from "react";
import s from "./UserAvatar.module.css";
import avatarimg from "./img/avatar.jpg";

const UserName = (props) => {
  return (
    <span style={{backgroundColor: props.textFonColor}} className={s.nameSpan}>{props.userName}</span>
  )
}

const AvatarImg = (props) => {
  let dig = props.width + "px";
  let rad = (props.width / 2) + "px";
  return (
    <img style={{width: dig, height: dig, borderRadius: rad}} alt="avatar" src={props.img} className={s.avatar}/>
  )
}

const UserAvatar = (props) => {
  let a = <UserName textFonColor={props.textFonColor} userName={props.userName} />;
  let b = <AvatarImg width={props.width} img={avatarimg} />;
  return (
    <div className={s.avatarCont}>
      {(props.first)? a : b}
      {(props.first)? b : a} 
      </div>
  )
}

export default UserAvatar;
