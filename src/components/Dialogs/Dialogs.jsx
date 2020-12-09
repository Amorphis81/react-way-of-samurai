import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  const dialogsElements = props.dialogsData.map( d => <DialogItem id={d.id} name={d.name} /> );
  const messagesElements = props.messagesData.map( m => <Message message={m.message}/> );

  return (
    <div className={'dialogs'}>
      <h2 className="h2 dialogs__title">Диалоги</h2>
      <div className="dialogs__wrapper">
        <ul className="dialogs__list dialogs-list">{dialogsElements}</ul>
        <div className="dialogs__messages dialogs-messages">{messagesElements}</div>
      </div>
    </div>
  )
}

export default Dialogs