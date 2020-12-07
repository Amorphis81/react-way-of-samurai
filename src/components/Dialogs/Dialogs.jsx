import React from "react";
import avatar from "../../assets/img/avatar.jpg";
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
  return (
    <div className={'dialogs'}>
      <h2 className="h2 dialogs__title">Диалоги</h2>
      <div className="dialogs__wrapper">
        <ul className="dialogs__list dialogs-list">
          <li className="dialogs-list__item">
            <NavLink to={'/dialogs/1'} activeClassName={'active'}>Nike</NavLink>
          </li>
          <li className="dialogs-list__item">
            <NavLink to={'/dialogs/2'} activeClassName={'active'}>Mike</NavLink>
          </li>
          <li className="dialogs-list__item">
            <NavLink to={'/dialogs/3'} activeClassName={'active'}>Tramp</NavLink>
          </li>
          <li className="dialogs-list__item">
            <NavLink to={'/dialogs/4'} activeClassName={'active'}>Obama</NavLink>
          </li>
          <li className="dialogs-list__item">
            <NavLink to={'/dialogs/5'} activeClassName={'active'}>Alex</NavLink>
          </li>
          <li className="dialogs-list__item">
            <NavLink to={'/dialogs/6'} activeClassName={'active'}>Victor</NavLink>
          </li>
        </ul>
        <div className="dialogs__messages dialogs-messages">
          <div className="dialogs-messages__item">
            <div className="dialogs-messages__avatar">
              <img src={avatar} alt="avatar" className="dialogs-messages__img"/>
              <div className="dialogs-messages__name">Nike</div>
            </div>
            <div className="dialogs-messages__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto, atque, beatae blanditiis dolor
              eaque excepturi impedit laboriosam minima natus necessitatibus nesciunt quaerat rerum sint unde, velit
              voluptate. Aliquid, magni?
            </div>
          </div>

          <div className="dialogs-messages__item">
            <div className="dialogs-messages__avatar">
              <img src={avatar} alt="avatar" className="dialogs-messages__img"/>
              <div className="dialogs-messages__name">Obama</div>
            </div>
            <div className="dialogs-messages__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto, atque, beatae blanditiis dolor
              eaque excepturi impedit laboriosam minima natus necessitatibus nesciunt quaerat rerum sint unde, velit
              voluptate. Aliquid, magni?
            </div>
          </div>

          <div className="dialogs-messages__item">
            <div className="dialogs-messages__avatar">
              <img src={avatar} alt="avatar" className="dialogs-messages__img"/>
              <div className="dialogs-messages__name">Tramp</div>
            </div>
            <div className="dialogs-messages__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto, atque, beatae blanditiis dolor
              eaque excepturi impedit laboriosam minima natus necessitatibus nesciunt quaerat rerum sint unde, velit
              voluptate. Aliquid, magni?
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs