import rerenderEntireTree from "../render";

const state = {
  profilePage: {
    posts: [
      {id: 1, message: 'Test mess 1', likeCounts: 15},
      {id: 2, message: 'Test mess 2', likeCounts: 20},
    ],
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
}

export const addPost = (postMessage) => {
  const newPost = {
    id: 3,
    message: postMessage,
    likeCounts: 30
  };
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
}


export default state;