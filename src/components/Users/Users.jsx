import React from "react";
import UsersItem from "./UsersItem/UsersItem";
import {toggleFollowingProgress} from "../../redux/users-reducer";

const Users = props => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  const pages = [];
  for(let i = 1; i <= pagesCount; i++){
    pages.push(i);
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
    followingInProgress={props.followingInProgress}
    toggleFollowingProgress={props.toggleFollowingProgress}
  />);

  return (
    <div className={'users'}>
      <div className={'pagination users__pagination'}>
        {
          pages.map(pageNumber => {
            let selected = (props.currentPage === pageNumber) ? 'active' : '';
            return <span key={pageNumber}
                         className={`pagination__item ${selected}`}
                         onClick={() => props.onPageChanged(pageNumber)}>{pageNumber}</span>
          })
        }
      </div>
      <h2 className="h2 users__title">Users</h2>
      <div className="users__list users-list">
        {usersList}
      </div>
      <button className="btn users__show-more">Show more</button>
    </div>
  )
}

export default Users;