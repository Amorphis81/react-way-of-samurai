import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../../redux/state";


const AddMessage = (props) => {
  const newMessageElement = React.createRef();

  const addMessage = () => {
    props.dispatch(addMessageActionCreator())
  }
  const onMessageChange = () => {
    const text = newMessageElement.current.value;
    const action = updateNewMessageTextActionCreator(text);
    props.dispatch(action);
  }

  return (
    <div className="new-post dialogs__new-post">
      <h3 className={'h3 new-post__title'}>Add Message</h3>
      <div className="new-post__inner">
        <textarea ref={ newMessageElement } value={props.newMessageText} onChange={ onMessageChange } className={'new-post__textarea'} cols="30" rows="4"/>
        <button onClick={ addMessage } className={'btn new-post__btn'}>Add Message</button>
      </div>
    </div>
  )
}

export default AddMessage;