import React from "react";
import s from "./UserAvatar.module.css";
import defaultAvatar from "../../../Assets/img/userDefaults.png";
import { NavLink } from "react-router-dom";

const UserName = (props) => {
    return (
        <span style={{backgroundColor: props.textFonColor}} className={s.nameSpan}>{props.userName}</span>
    )
}

const AvatarImg = (props) => {
    let dig = props.width + "px";
    let rad = (props.width / 2) + "px";
    console.log(props.isAuth)
    return (
        <div>
          {props.isAuth ? props.login : "Логин"}
        </div>

    )
}

const UserAvatar = (props) => {
    let a = <UserName textFonColor={props.textFonColor} userName={props.userName}/>;
    let b = <AvatarImg width={props.width} img={ defaultAvatar }/>;
    debugger;
    return (
        <div className={s.avatarCont}>
            {(props.first) ? a : b}
            {(props.first) ? b : a}
        </div>
    )
}

export default UserAvatar;

