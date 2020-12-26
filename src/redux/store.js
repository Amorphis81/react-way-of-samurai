import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import sidebarReducer from "./sidebar-reducer";


export let store = {
  _state: {
    profilePage: {
      _postId: 3,
      posts: [
        {id: 1, message: 'Test mess 1', likeCounts: 15},
        {id: 2, message: 'Test mess 2', likeCounts: 20},
      ],
      newPostText: 'it-kamasutra'
    },
    messagesPage: {
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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
}