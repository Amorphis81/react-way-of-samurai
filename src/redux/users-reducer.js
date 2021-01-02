import avatar from '../assets/img/avatar.jpg';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const initialState = {
  users: [
    {
      id: 1,
      photoUrl: avatar,
      followed: false,
      fullName: 'Bill Gates',
      status: 'I`am a boss',
      location: {city: 'Minsk', country: 'Belarus'}
    },
    {
      id: 2,
      photoUrl: avatar,
      followed: false,
      fullName: 'Alexey Navalny',
      status: 'I`am a boss too',
      location: {city: 'Moscow', country: 'Russia'}
    },
    {
      id: 3,
      photoUrl: avatar,
      followed: true,
      fullName: 'Andrew Malakhov',
      status: 'I`am a boss three',
      location: {city: 'Apatity', country: 'Russia'}
    },
    {
      id: 4,
      photoUrl: avatar,
      followed: true,
      fullName: 'Alex Pankratov',
      status: 'I`am a boss four',
      location: {city: 'Kirovsk', country: 'Russia'}
    },
  ],
  _userId: 5,
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: true};
          }
          return user;
        }),
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: false};
          }
          return user;
        }),
      }
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users]
      }
    default:
      return state
  }
}

export const followAC = userId => ({type: FOLLOW, userId});
export const unfollowAC = userId => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;