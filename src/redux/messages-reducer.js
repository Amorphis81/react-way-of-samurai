const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

const initialState = {
  _messageId: 4,
  dialogs: [
    {id: 1, name: 'Nike'},
    {id: 2, name: 'Mike'},
    {id: 3, name: 'Tramp'},
    {id: 4, name: 'Obama'},
    {id: 5, name: 'Alex'},
    {id: 6, name: 'Victor'},
  ],
  messages: [
    {id: 1, message: 'Hi hi'},
    {id: 2, message: 'Ho ho'},
    {id: 3, message: 'Hu hu'},
  ],
  newMessageBody: 'My cool message!!!',
}

const messagesReducer = (state = initialState, action) => {
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