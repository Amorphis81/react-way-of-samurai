import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddMessage from "./AddMessage/AddMessage";

const Dialogs = (props) => {
  const dialogsElements = props.messagesPage.dialogs.map( d => <DialogItem id={d.id} name={d.name} key={d.id} /> );
  const messagesElements = props.messagesPage.messages.map( m => <Message message={m.message} key={m.id} /> );

  return (
    <div className={'dialogs'}>
      <h2 className="h2 dialogs__title">Диалоги</h2>
      <div className="dialogs__wrapper">
        <ul className="dialogs__list dialogs-list">{dialogsElements}</ul>
        <div className="dialogs__messages dialogs-messages">{messagesElements}</div>
      </div>
      <AddMessage newMessageText={props.messagesPage.newMessageText} dispatch={props.dispatch}/>
    </div>
  )
}

export default Dialogs