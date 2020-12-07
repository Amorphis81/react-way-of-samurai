import React from "react";
import avatar from "../../../../assets/img/avatar.jpg";

const Post = (props) => {
  return (
    <div className={'posts__item'}>
      <div className="posts__body">
        <div className="posts__avatar"><img src={avatar} alt="avatar" className="posts__img"/></div>
        <div className={'posts__message'}>{props.message}</div>
      </div>
      <div className="posts__footer">
        {props.likeCounts} likes
      </div>
    </div>
  )
}

export default Post;