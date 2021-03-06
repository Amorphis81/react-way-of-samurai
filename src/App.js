import './assets/styles/App.scss';
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import { Switch, Route } from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";

const App = () => {
  return (
    <div className={'app-wrapper'}>
      <HeaderContainer />
      <Navbar />
      <main className="app-wrapper-content">
        <Switch>
          <Route path={'/profile/:userId?'}><ProfileContainer /></Route>

          <Route path={'/dialogs'}><DialogsContainer /></Route>

          <Route path={'/users'}> <UsersContainer /> </Route>

          <Route path={'/music'}> <Music /> </Route>

          <Route path={'/settings'}> <Settings /></Route>

          <Route path={'/login'}> <LoginPage /></Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
