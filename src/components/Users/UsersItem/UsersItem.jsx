import React from "react";
import avatar from "../../../assets/img/avatar.jpg";
import {Link} from "react-router-dom";
import axios from "axios";

const UsersItem = props => {
  const onFollowClick = () => {
    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {},{
      withCredentials: true,
      headers: {
        'API-KEY': '260cf9b1-64cd-48df-8146-63bfe74b0e71'
      }
    })
      .then(response => {
        if (response.data.resultCode === 0){
          props.follow(props.id)
        }
      });
  };
  const onUnFollowClick = () => {
    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {
      withCredentials: true,
      headers: {
        'API-KEY': '260cf9b1-64cd-48df-8146-63bfe74b0e71'
      }
    })
      .then(response => {
        if (response.data.resultCode === 0){
          props.unfollow(props.id)
        }
      });

  };
  const photoSrc = props.photoUrl ? props.photoUrl : avatar;

  const followToggle = () => {
    return props.folowed ? <button onClick={onUnFollowClick} className="btn users-list__btn">unfollow</button> :
                          <button onClick={onFollowClick} className="btn users-list__btn">follow</button>
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