const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
  _postId: 3,
  posts: [
    {id: 1, message: 'Test mess 1', likeCounts: 15},
    {id: 2, message: 'Test mess 2', likeCounts: 20},
  ],
  newPostText: 'it-kamasutra'
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state._postId,
        message: state.newPostText,
        likeCounts: 0
      };
      state.posts.push(newPost);
      state.newPostText = '';
      state._postId++;
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state
  }
}

export const addPostActionCreator = () => ( {type: ADD_POST} )

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
})

export default profileReducer;