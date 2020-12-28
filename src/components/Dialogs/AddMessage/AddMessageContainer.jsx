import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../redux/messages-reducer";
import AddMessage from "./AddMessage";
import StoreContext from "../../../StoreContext";


const AddMessageContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {
        store => {
          const state = store.getState();

          const sendMessageClick = () => store.dispatch(sendMessageCreator());

          const onMessageChange = (text) => {
            const action = updateNewMessageBodyCreator(text);
            store.dispatch(action);
          }

          return <AddMessage sendMessage={sendMessageClick}
                             onMessageChange={onMessageChange}
                             newMessageText={state.messagesPage.newMessageBody}/>
        }
      }

    </StoreContext.Consumer>
  )
}

export default AddMessageContainer;