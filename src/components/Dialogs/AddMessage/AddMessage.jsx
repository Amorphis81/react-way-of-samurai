import React from "react";


const AddMessage = () => {
  const newMessage = React.createRef();
  const addMessage = () => {
    const text = newMessage.current.value;
    console.log(text);
  }
  return (
    <div className="new-post dialogs__new-post">
      <h3 className={'h3 new-post__title'}>Add Message</h3>
      <div className="new-post__inner">
        <textarea ref={ newMessage } className={'new-post__textarea'} cols="30" rows="4"/>
        <button onClick={ addMessage } className={'btn new-post__btn'}>Add Message</button>
      </div>
    </div>
  )
}

export default AddMessage;