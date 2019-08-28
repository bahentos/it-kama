import React from "react";
import s from "./MessagesHeader.module.css";


const MessagesHeader = (props) => {
  return (
    <div className={s.messagesHeader}>
      <div className={s.left}>
        <img src={'/img/avatar-1.png'} className={s.avatar} alt="avatar" />
        <span>Tomas Mann</span>
      </div>
      <div className={s.right}>
        <button className={s.changeBackground} />
        <button className={s.contactInfo} />
      </div>
    </div>
  )
}

export default MessagesHeader;
