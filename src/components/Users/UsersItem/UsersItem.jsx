import React from "react";

const UsersItem = props => {
  const onFollowClick = () => props.follow(props.id);
  const onUnFollowClick = () => props.unfollow(props.id);

  const followToggle = () => {
    return props.folowed ? <button onClick={onUnFollowClick} className="btn users-list__btn">unfollow</button> :
                          <button onClick={onFollowClick} className="btn users-list__btn">follow</button>
  }
  return (
    <div className={'users-list__item'}>
      <div className="users-list__avatar-path">
        <img src={props.photoUrl} alt="avatar" className="avatar users-list__avatar"/>
        {followToggle()}
      </div>
      <div className="users-list__status-path status-path">
        <div className="status-path__left">
          <div className="status-path__full-name">{props.fullName}</div>
          <div className="status-path__status">{props.status}</div>
        </div>
        <div className="status-path__location">
          <div className="status-path__country">{props.location.country}</div>
          <div className="status-path__city">{props.location.city}</div>
        </div>
      </div>
    </div>
  )
}

export default UsersItem;