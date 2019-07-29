import React from "react";
import s from "./Navbar.module.css";
import { NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div>
        <NavLink activeClassName={s.active} className={s.item} to="/profile">
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink activeClassName={s.active} className={s.item} to="/dialogs">
          Messages
        </NavLink>
      </div>
      <div>
        <NavLink activeClassName={s.active} className={s.item} to="/news">
          News
        </NavLink>
      </div>
      <div>
        <NavLink activeClassName={s.active} className={s.item} to="/music">
          Music
        </NavLink>
      </div>
      <div>
        <NavLink activeClassName={s.active} className={s.item} to="/settings">
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
