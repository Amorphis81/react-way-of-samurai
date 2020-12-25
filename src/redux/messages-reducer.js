const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

const messagesReducer = (state, action) => {
   switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: state._messageId,
        message: state.newMessageBody,
      };
      state.messages.push(newMessage);
      state.newMessageBody = '';
      state._messageId++;
      return state;
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    default:
      return state;
  }
}

export const sendMessageCreator = () => ( {type: SEND_MESSAGE} )

export const updateNewMessageBodyCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: text,
})

export default messagesReducer;