import {connect} from 'react-redux';
import React from 'react';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers, toggleFollowingProgress,
  toggleIsFetching,
  unfollow
} from "../../redux/users-reducer";
import {usersAPI} from "../../api/api";


class UsersAPIComponent extends React.Component{
  componentDidMount() {
    this.props.toggleIsFetching(true);

    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      });
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);

    usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
      });
  }
  render() {
    return <>
      { this.props.isFetching ? <Preloader /> : null }
      <Users totalUsersCount={this.props.totalUsersCount}
                  pageSize={this.props.pageSize}
                  users={this.props.users}
                  currentPage={this.props.currentPage}
                  onPageChanged={this.onPageChanged}
                  follow={this.props.follow}
                  unfollow={this.props.unfollow}
                  followingInProgress={this.props.followingInProgress}
                  toggleFollowingProgress={this.props.toggleFollowingProgress}
      />
    </>
  }
}

const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  }
}

const UsersContainer = connect(mapStateToProps, {
  follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress
})(UsersAPIComponent)

export default UsersContainer;