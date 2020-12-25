import React from "react";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../../redux/state";


const AddMessage = (props) => {

  const addMessage = () => {
    props.dispatch(sendMessageCreator())
  }
  const onMessageChange = (e) => {
    const text = e.target.value;
    const action = updateNewMessageBodyCreator(text);
    props.dispatch(action);
  }

  return (
    <div className="new-post dialogs__new-post">
      <h3 className={'h3 new-post__title'}>Add Message</h3>
      <div className="new-post__inner">
        <textarea value={props.newMessageText} onChange={ onMessageChange } className={'new-post__textarea'} cols="30" rows="4"/>
        <button onClick={ addMessage } className={'btn new-post__btn'}>Add Message</button>
      </div>
    </div>
  )
}

export default AddMessage;