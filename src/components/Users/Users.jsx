import React from "react";
import UsersItem from "./UsersItem/UsersItem";
import axios from "axios";

class Users extends React.Component{
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  }
  render() {
    const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

    const pages = [];
    for(let i = 1; i <= pagesCount; i++){
      pages.push(i);
    }
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
        <div className={'pagination users__pagination'}>
          {
            pages.map(pageNumber => {
              let selected = (this.props.currentPage === pageNumber) ? 'active' : '';
              return <span key={pageNumber}
                           className={`pagination__item ${selected}`}
                           onClick={() => this.onPageChanged(pageNumber)}>{pageNumber}</span>
            })
          }
        </div>
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