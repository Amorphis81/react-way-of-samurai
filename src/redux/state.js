const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

export let store = {
  _postId: 3,
  _messageId: 4,
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'Test mess 1', likeCounts: 15},
        {id: 2, message: 'Test mess 2', likeCounts: 20},
      ],
      newPostText: 'it-kamasutra'
    },
    messagesPage: {
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
    },
    sidebar: [
      {id: 1, name: 'Bill'},
      {id: 2, name: 'Ted'},
      {id: 3, name: 'Neo'},
    ]
  },
  _callSubscriber(){
    console.log('no subscribers (observers)');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: this._postId,
        message: this._state.profilePage.newPostText,
        likeCounts: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._callSubscriber(this._state);
      this._state.profilePage.newPostText = '';
      this._postId++;
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let newMessage = {
        id: this._messageId,
        message: this._state.messagesPage.newMessageBody,
      };
      this._state.messagesPage.messages.push(newMessage);
      this._callSubscriber(this._state);
      this._state.messagesPage.newMessageBody = '';
      this._messageId++;
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.messagesPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    }
  },
}

export const addPostActionCreator = () => ( {type: ADD_POST} )

export const sendMessageCreator = () => ( {type: SEND_MESSAGE} )

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
})

export const updateNewMessageBodyCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: text,
})
