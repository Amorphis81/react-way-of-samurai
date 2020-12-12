import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  const dialogsElements = props.state.dialogs.map( d => <DialogItem id={d.id} name={d.name} key={d.id} /> );
  const messagesElements = props.state.messages.map( m => <Message message={m.message} key={m.id} /> );

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