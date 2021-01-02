import React from "react";
import UsersItem from "./UsersItem/UsersItem";
import avatar from "../../assets/img/avatar.jpg";

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
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
    ]);
  }

  const usersList = props.users.map(users => <UsersItem
                      id={users.id}
                      key={users.id}
                      photoUrl={users.photoUrl}
                      folowed={users.followed}
                      fullName={users.fullName}
                      status={users.status}
                      location={users.location}
                      follow={props.follow}
                      unfollow={props.unfollow}
  />);
  return (
    <div className={'users'}>
      <h2 className="h2 users__title">Users</h2>
      <div className="users__list users-list">
        {usersList}
      </div>
      <button className="btn users__show-more">Show more</button>
    </div>
  )
}

export default Users