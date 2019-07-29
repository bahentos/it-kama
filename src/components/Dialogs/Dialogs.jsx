import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + " " + s.active}>Andry</div>
        <div className={s.dialog}>Maxim</div>
        <div className={s.dialog}>Sveta</div>
      </div>
      <div className={s.messagesItems}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>Ne hi</div>
        <div className={s.message}>Ai Ai</div>
      </div>
    </div>
  );
};

export default Dialogs;
