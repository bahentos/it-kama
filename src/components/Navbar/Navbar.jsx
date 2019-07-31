import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.logo}>
        <img
          src="http://preview-vuse.hexesis.com/static/vuse-circle-white.svg"
          alt=""
        />
        <span className={s.name}>Соц-сеть</span>
      </div>
      <div className={s.cont}>
        <NavLink activeClassName={s.active} className={s.item + " " + s.profile} to="/profile">
          <div className={s.pict} />
          Profile
        </NavLink>
      </div>
      <div className={s.cont}>
        <NavLink activeClassName={s.active} className={s.item + " " + s.messages} to="/dialogs">
          <div className={s.pict} />
          Messages
        </NavLink>
      </div>
      <div className={s.cont}>
        <NavLink activeClassName={s.active} className={s.item + " " + s.news} to="/news">
          <div className={s.pict} />
          News
        </NavLink>
      </div>
      <div className={s.cont}>
        <NavLink activeClassName={s.active} className={s.item + " " + s.music} to="/music">
        <div className={s.pict} />
          Music
        </NavLink>
      </div>
      <div className={s.cont}>
        <NavLink activeClassName={s.active} className={s.item + " " + s.settings} to="/settings">
        <div className={s.pict} />
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
