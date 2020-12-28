import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../redux/messages-reducer";
import AddMessage from "./AddMessage";


const AddMessageContainer = (props) => {
  const state = props.store.getState();

  const sendMessageClick = () => props.store.dispatch(sendMessageCreator());

  const onMessageChange = (text) => {
    const action = updateNewMessageBodyCreator(text);
    props.store.dispatch(action);
  }

  return <AddMessage sendMessage={sendMessageClick}
                     onMessageChange={onMessageChange}
                     newMessageText={state.messagesPage.newMessageBody} />

}

export default AddMessageContainer;