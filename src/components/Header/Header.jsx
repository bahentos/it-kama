import React from "react";
import s from "./Header.module.css";
import UserAvatar from "./UserAvatar/UserAvatar";

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.arrow}/>
            <UserAvatar  width="50" textFonColor="white" id={props.id} isAuth={props.isAuth} userName={props.login} img={props.photo} first={true}/>
        </header>
    );
};

export default Header;
