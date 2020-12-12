import avatar from "../../../assets/img/avatar.jpg";
import React from "react";

const Sidebar = (props) => {
  const friends = props.sidebar.map(friend => {
    return (
      <a href="#" className="sidebar__list-item" key={friend.id}>
        <img className="sidebar__list-avatar" src={avatar} alt="avatar"/>
        <span className="sidebar__list-name">{friend.name}</span>
      </a>
    )
  })

  return (
    <div className={'sidebar'}>
      <h2 className="h2 sidebar__title">Friends</h2>
      <div className="sidebar__list">
        {friends}
      </div>
    </div>
  )
}

export default Sidebar;