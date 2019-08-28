import React from "react";
import s from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = props => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={s.dialog}>
      <NavLink className={s.navLink} exact to={path}>
        <img src={props.avatar} alt="avatar" className={s.avatar} />
        {props.name}
        <div className={s.unread}>{props.unread}</div>
      </NavLink>
    </div>
  );
};

export default DialogItem;
