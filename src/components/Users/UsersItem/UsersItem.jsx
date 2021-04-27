import React from "react";
import avatar from "../../../assets/img/avatar.jpg";
import {Link} from "react-router-dom";
import {usersAPI} from "../../../api/api";

const UsersItem = props => {
  const onFollowClick = () => {
    props.toggleFollowingProgress(true, props.id);

    usersAPI.follow(props.id)
      .then(data => {
        if (data.resultCode === 0){
          props.follow(props.id)
        }
        props.toggleFollowingProgress(false, props.id);
      });
  };

  const onUnFollowClick = () => {
    props.toggleFollowingProgress(true, props.id);

    usersAPI.unfollow(props.id)
      .then(data => {
        if (data.resultCode === 0){
          props.unfollow(props.id)
        }
        props.toggleFollowingProgress(false, props.id);
      });

  };
  const photoSrc = props.photoUrl ? props.photoUrl : avatar;

  const followToggle = () => {
    return props.folowed ? <button disabled={props.followingInProgress.some(id => id === props.id)} onClick={onUnFollowClick} className="btn users-list__btn">unfollow</button> :
                          <button disabled={props.followingInProgress.some(id => id === props.id)} onClick={onFollowClick} className="btn users-list__btn">follow</button>
  }
  return (
    <div className={'users-list__item'}>
      <div className="users-list__avatar-path">
        <Link to={`/profile/${props.id}`}>
          <img src={photoSrc} alt="avatar" className="avatar users-list__avatar"/>
        </Link>
        {followToggle()}
      </div>
      <div className="users-list__status-path status-path">
        <div className="status-path__left">
          <div className="status-path__full-name">{props.name}</div>
          <div className="status-path__status">{props.status}</div>
        </div>
        <div className="status-path__location">
          <div className="status-path__country">{'props.location.country'}</div>
          <div className="status-path__city">{'props.location.city'}</div>
        </div>
      </div>
    </div>
  )
}

export default UsersItem;