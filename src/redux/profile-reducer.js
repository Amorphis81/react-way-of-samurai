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
    case ADD_POST: {
      let newPost = {
        id: state._postId,
        message: state.newPostText,
        likeCounts: 0
      };
      // stateCopy._postId++;
      return {
        ...state,
        newPostText: '',
        posts: [...state.posts, newPost]
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      };
    }
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