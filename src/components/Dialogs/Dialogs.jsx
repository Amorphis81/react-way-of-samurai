import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddMessageContainer from "./AddMessage/AddMessageContainer";
import StoreContext from "../../StoreContext";

const Dialogs = (props) => {
  return (
    <StoreContext.Consumer>
      {
        store => {
          const state = store.getState();
          const dialogsElements = state.messagesPage.dialogs.map( d => <DialogItem id={d.id} name={d.name} key={d.id} /> );
          const messagesElements = state.messagesPage.messages.map( m => <Message message={m.message} key={m.id} /> );

          return (
            <div className={'dialogs'}>
              <h2 className="h2 dialogs__title">Диалоги</h2>
              <div className="dialogs__wrapper">
                <ul className="dialogs__list dialogs-list">{dialogsElements}</ul>
                <div className="dialogs__messages dialogs-messages">{messagesElements}</div>
              </div>
              <AddMessageContainer store={store} />
            </div>
          )
        }
      }
    </StoreContext.Consumer>
  )


}

export default Dialogs