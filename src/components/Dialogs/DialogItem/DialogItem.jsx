import {NavLink} from "react-router-dom";
import React from "react";

const DialogItem = (props) => {
  const path = `/dialogs/${props.id}`;
  return (
    <li className="dialogs-list__item">
      <NavLink to={path} activeClassName={'active'}>{props.name}</NavLink>
    </li>
  )
}
 export default DialogItem;