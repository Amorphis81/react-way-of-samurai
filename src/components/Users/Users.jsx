import React from "react";
import UsersItem from "./UsersItem/UsersItem";
import axios from "axios";

class Users extends React.Component{
  componentDidMount() {
    axios.get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  }
  getUsers = () => {
    if (this.props.users.length === 0) {
      axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => {
          this.props.setUsers(response.data.items);
        });
    }
  }
  render() {
    this.usersList = this.props.users.map(users => <UsersItem
      id={users.id}
      key={users.id}
      photoUrl={users.photos.small}
      folowed={users.followed}
      name={users.name}
      status={users.status}
      location={users.location}
      follow={this.props.follow}
      unfollow={this.props.unfollow}
    />);
    return (
      <div className={'users'}>
        {/*<button onClick={this.getUsers}>Get Users</button>*/}
        <h2 className="h2 users__title">Users</h2>
        <div className="users__list users-list">
          {this.usersList}
        </div>
        <button className="btn users__show-more">Show more</button>
      </div>
    )
  }
}

export default Users