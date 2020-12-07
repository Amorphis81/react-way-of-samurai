import React from "react";
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={'nav'}>
      <NavLink to="/profile" className={'nav__item'} activeClassName="active">Profiles</NavLink>
      <NavLink to="/dialogs" className={'nav__item'} activeClassName="active">Messages</NavLink>
      <NavLink to="/news" className={'nav__item'} activeClassName="active">News</NavLink>
      <NavLink to="/music" className={'nav__item'} activeClassName="active">Music</NavLink>
      <NavLink to="/settings" className={'nav__item'} activeClassName="active">Settings</NavLink>
    </nav>
  );
}

export default Navbar;