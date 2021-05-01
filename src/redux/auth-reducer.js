import {headerAPI, usersAPI} from "../api/api";
import {setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching} from "./users-reducer";

const SET_USER_DATA = 'SET_USER_DATA';
const UNFOLLOW = 'UNFOLLOW';

const initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
  isFetching: false,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      }
    default:
      return state
  }
}


export const setAuthUserData = (userId, login, email) => ({type: SET_USER_DATA, data: {userId, login, email}});

export const getAuth = () => {
  return dispatch => {
    headerAPI.getAuth().then(data => {
      if(data.resultCode === 0){
        const {id, login, email} = data.data;
        dispatch(setAuthUserData(id, login, email));
      }
    });
  }
}

export default authReducer;