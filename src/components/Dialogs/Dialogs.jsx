import React from "react";
import avatar from "../../assets/img/avatar.jpg";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  const path = `/dialogs/${props.id}`;
  return (
    <li className="dialogs-list__item">
      <NavLink to={path} activeClassName={'active'}>{props.name}</NavLink>
    </li>
  )
}

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

const Dialogs = (props) => {
  return (
    <div className={'dialogs'}>
      <h2 className="h2 dialogs__title">Диалоги</h2>
      <div className="dialogs__wrapper">
        <ul className="dialogs__list dialogs-list">
          <DialogItem name={'Nike'} id={1}/>
          <DialogItem name={'Mike'} id={2}/>
          <DialogItem name={'Tramp'} id={3}/>
          <DialogItem name={'Obama'} id={4}/>
          <DialogItem name={'Alex'} id={5}/>
          <DialogItem name={'Victor'} id={6}/>
        </ul>
        <div className="dialogs__messages dialogs-messages">
          <Message message={'test'}/>
          <Message message={'You'}/>
          <Message message={'Yahoo'}/>
          <Message message={'test123'}/>
        </div>
      </div>
    </div>
  )
}

export default Dialogs