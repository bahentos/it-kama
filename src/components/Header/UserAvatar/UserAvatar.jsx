import React from "react";
import s from "./UserAvatar.module.css";
import defaultAvatar from "../../../Assets/img/userDefaults.png";
import {NavLink} from "react-router-dom";

const UserName = (props) => {
    return (
        <span style={{backgroundColor: props.textFonColor}} className={s.nameSpan}>{props.userName}</span>
    )
}

const AvatarImg = (props) => {
    let dig = props.width + "px";
    let rad = (props.width / 2) + "px";
    let navTrue = <NavLink className={s.nav} to={'/profile/' + props.id}>
        <img style={{width: dig, height: dig, borderRadius: rad}} alt="avatar" src={props.img}
             className={s.avatar}/>
    </NavLink>

    let navFalse = <NavLink className={s.nav} to={'/login'}>
        <img style={{width: dig, height: dig, borderRadius: rad}} alt="avatar" src={props.img}
             className={s.avatar}/>
    </NavLink>

    return (
        <div>
            {props.isAuth ? navTrue : navFalse}
        </div>

    )
}

const UserAvatar = (props) => {
    let a = <UserName textFonColor={props.textFonColor} userName={props.userName}/>;
    let b = <AvatarImg id={props.id} width={props.width} img={ props.photo != null ? props.photo :  defaultAvatar }
                       isAuth={props.isAuth} userName={props.login}/>;
    return (
        <div className={s.avatarCont}>
            {(props.first) ? a : b}
            {(props.first) ? b : a}
        </div>
    )
}

export default UserAvatar;

