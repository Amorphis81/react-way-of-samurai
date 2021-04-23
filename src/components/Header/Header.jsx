import React from "react";
import logo from '../../assets/img/svg-logo-text.png';
import background from '../../assets/img/tree-736885__340.webp';
import {NavLink} from "react-router-dom";

const Header = props => {
  return (
    <header className={'header'} style={{backgroundImage: `url(${background})`}}>
      <a href="/" className={'header__logo'}><img src={logo} alt="logo"/></a>
      <div className="header__login login-block">
        {props.isAuth ?
          <NavLink to={'/login'} className={'login-block__link'}>{props.login}</NavLink> :
          <NavLink to={'/login'} className={'login-block__link'}>Login</NavLink>}
      </div>
    </header>
  );
}

export default Header;