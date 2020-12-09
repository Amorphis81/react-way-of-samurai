import avatar from "../../../assets/img/avatar.jpg";
import React from "react";

const Message = (props) => {
  return (
    <div className="dialogs-messages__item">
      <div className="dialogs-messages__avatar">
        <img src={avatar} alt="avatar" className="dialogs-messages__img"/>
        <div className="dialogs-messages__name">Nike</div>
      </div>
      <div className="dialogs-messages__text">{props.message}</div>
    </div>
  )
}

export default Message;