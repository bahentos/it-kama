import React from "react";
import s from "./DialogsHeader.module.css";



const DialogsHeader = (props) => {

  return (
    <div className={s.dialogsHeader}>
      <div className={s.iconChatContainer}>
        <div className={s.iconChat}>
        </div>
        <span>Dialogs</span>
      </div>
      <input className={s.searchField} type="text" placeholder="Search User" />
    </div>
  );
};

export default DialogsHeader;