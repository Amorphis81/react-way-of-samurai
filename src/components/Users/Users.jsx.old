import React from "react";
import UsersItem from "./UsersItem/UsersItem";
import avatar from "../../assets/img/avatar.jpg";
import axios from "axios";

const Users = (props) => {
  const getUsers = () => {
    if (props.users.length === 0) {
      axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => {
          props.setUsers(response.data.items);
      });
    }
  }

  const usersList = props.users.map(users => <UsersItem
                      id={users.id}
                      key={users.id}
                      photoUrl={users.photos.small}
                      folowed={users.followed}
                      name={users.name}
                      status={users.status}
                      location={users.location}
                      follow={props.follow}
                      unfollow={props.unfollow}
  />);
  return (
    <div className={'users'}>
      <button onClick={getUsers}>Get Users</button>
      <h2 className="h2 users__title">Users</h2>
      <div className="users__list users-list">
        {usersList}
      </div>
      <button className="btn users__show-more">Show more</button>
    </div>
  )
}

export default Users