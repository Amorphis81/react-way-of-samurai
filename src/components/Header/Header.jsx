import React from "react";
import logo from '../../assets/img/svg-logo-text.png';
import background from '../../assets/img/tree-736885__340.webp';

const Header = () => {
  return (
    <header className={'header'} style={{backgroundImage: `url(${background})`}}>
      <a href="/" className={'header__logo'}><img src={logo} alt="logo"/></a>
    </header>
  );
}

export default Header;