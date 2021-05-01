import {profileAPI, usersAPI} from "../api/api";
import {followSuccess, toggleFollowingProgress} from "./users-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const initialState = {
  _postId: 3,
  posts: [
    {id: 1, message: 'Test mess 1', likeCounts: 15},
    {id: 2, message: 'Test mess 2', likeCounts: 20},
  ],
  newPostText: 'it-kamasutra',
  profile: null,
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
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      }
    }
    default:
      return state
  }
}

export const addPost = () => ( {type: ADD_POST} )

export const updateNewPostText = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
})

export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile })

export const getUserProfile = (userId) => {
  return dispatch => {
    profileAPI.getProfile(userId)
      .then(data => {
        dispatch(setUserProfile(data));
      });
  }
}

export default profileReducer;