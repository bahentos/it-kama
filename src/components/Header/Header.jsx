import React from "react";
import s from "./Header.module.css";
import avatarimg from "./img/avatar.jpg";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.arrow}>
      </div>
      <div className={s.avatarCont}>
        <span>Tom Waits</span>
        <img src={avatarimg} className={s.avatar}/>
      </div>
    </header>
  );
};

export default Header;
