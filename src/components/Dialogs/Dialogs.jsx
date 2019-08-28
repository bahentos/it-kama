import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import DialogsHeader from "./DialogsHeader/DialogsHeader";

const Dialogs = props => {
  let dialogs = props.dialogsPage.dialogsData.map(name => (
    <DialogItem
      name={name.name}
      avatar={name.avatar}
      unread={name.unread}
      id={name.id}
    />
  ));

  return (
    <div className={s.dialogs}>
      <DialogsHeader dialogsData={props.dialogsPage.dialogsData} />
      <div className={s.dialogsItems}>{dialogs}</div>
      <Message
        dialogsPage={props.dialogsPage}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default Dialogs;
