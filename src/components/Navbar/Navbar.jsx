import React from "react";
import {NavLink} from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";

const Navbar = (props) => {
  return (
    <div className={'nav'}>
      <nav className={'nav__links'}>
        <NavLink to="/profile" className={'nav__item'} activeClassName="active">Profiles</NavLink>
        <NavLink to="/dialogs" className={'nav__item'} activeClassName="active">Messages</NavLink>
        <NavLink to="/news" className={'nav__item'} activeClassName="active">News</NavLink>
        <NavLink to="/music" className={'nav__item'} activeClassName="active">Music</NavLink>
        <NavLink to="/settings" className={'nav__item'} activeClassName="active">Settings</NavLink>
      </nav>
      {/*<Sidebar sidebar={props.sidebar} />*/}
    </div>
  );
}

export default Navbar;