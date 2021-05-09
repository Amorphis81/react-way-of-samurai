import {connect} from 'react-redux';
import React from 'react';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {
  follow, getUsers, toggleFollowingProgress, unfollow
} from "../../redux/users-reducer";
import {widthAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


class UsersAPIComponent extends React.Component{
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }
  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize)
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

export default compose(
  widthAuthRedirect,
  connect(mapStateToProps, {
    follow, unfollow, toggleFollowingProgress, getUsers
  })
)(UsersAPIComponent);