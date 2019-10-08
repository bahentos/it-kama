import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import DialogsHeader from "./DialogsHeader/DialogsHeader";

const Dialogs = props => {
  let dialogs = props.dialogsData.map(name => (
    <DialogItem
      key={name.id}
      name={name.name}
      avatar={name.avatar}
      unread={name.unread}
      id={name.id}
    />
  ));

  return (
    <div className={s.dialogs}>
      <DialogsHeader />
      <div className={s.dialogsItems}>{dialogs}</div>
      <Message />
    </div>
  );
};

export default Dialogs;
