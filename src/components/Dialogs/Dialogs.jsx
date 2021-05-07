import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router";


const Dialogs = props => {
  const dialogsElements = props.messagesPage.dialogs.map( d => <DialogItem id={d.id} name={d.name} key={d.id} /> );
  const messagesElements = props.messagesPage.messages.map( m => <Message message={m.message} key={m.id} /> );

  const onSendMessageClick = () => props.sendMessage();

  const onNewMessageChange = (e) => {
    const text = e.target.value;
    props.updateNewMessageBody(text);
  }

  return (
    <div className={'dialogs'}>
      <h2 className="h2 dialogs__title">Диалоги</h2>
      <div className="dialogs__wrapper">
        <ul className="dialogs__list dialogs-list">{dialogsElements}</ul>
        <div className="dialogs__messages dialogs-messages">{messagesElements}</div>
      </div>
      <div className="new-post dialogs__new-post">
        <h3 className={'h3 new-post__title'}>Add Message</h3>
        <div className="new-post__inner">
          <textarea placeholder="Enter you message" value={props.messagesPage.newMessageBody}
                    onChange={ onNewMessageChange }
                    className={'new-post__textarea'} cols="30" rows="4"/>
          <button onClick={ onSendMessageClick } className={'btn new-post__btn'}>Add Message</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs