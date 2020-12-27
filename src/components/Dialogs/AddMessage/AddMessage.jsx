import React from "react";

const AddMessage = (props) => {
  const onSendMessageClick = () => props.sendMessage();

  const onNewMessageChange = (e) => {
    const text = e.target.value;
    props.onMessageChange(text);
  }

  return (
    <div className="new-post dialogs__new-post">
      <h3 className={'h3 new-post__title'}>Add Message</h3>
      <div className="new-post__inner">
        <textarea value={props.newMessageText} onChange={ onNewMessageChange } className={'new-post__textarea'} cols="30" rows="4"/>
        <button onClick={ onSendMessageClick } className={'btn new-post__btn'}>Add Message</button>
      </div>
    </div>
  )
}

export default AddMessage;