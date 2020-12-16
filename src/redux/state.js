export let store = {
  _postId: 3,
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
  addPost() {
    let newPost = {
      id: this._postId,
      message: this._state.profilePage.newPostText,
      likeCounts: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._callSubscriber(this._state);
    this._state.profilePage.newPostText = '';
    this._postId++;
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  }
}
