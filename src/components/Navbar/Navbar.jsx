import React from "react";
import {NavLink} from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import SidebarContainer from "./Sidebar/SidebarContainer";

const Navbar = (props) => {
  return (
    <div className={'nav'}>
      <nav className={'nav__links'}>
        <NavLink to="/profile" className={'nav__item'} activeClassName="active">Profiles</NavLink>
        <NavLink to="/dialogs" className={'nav__item'} activeClassName="active">Messages</NavLink>
        <NavLink to="/users" className={'nav__item'} activeClassName="active">Users</NavLink>
        <NavLink to="/music" className={'nav__item'} activeClassName="active">Music</NavLink>
        <NavLink to="/settings" className={'nav__item'} activeClassName="active">Settings</NavLink>
      </nav>
      <SidebarContainer />
    </div>
  );
}

export default Navbar;