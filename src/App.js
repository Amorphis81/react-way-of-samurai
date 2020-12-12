import './assets/styles/App.scss';
import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
  return (
    <Router>
      <div className={'app-wrapper'}>
        <Header/>
        <Navbar sidebar={props.state.sidebar}/>
        <main className="app-wrapper-content">
          <Switch>
            <Route path={'/profile'}>
              <Profile state={props.state.profilePage} />
            </Route>
            <Route path={'/dialogs'}>
              <Dialogs state = {props.state.messagesPage} />
            </Route>
            <Route path={'/news'}>
              <News />
            </Route>
            <Route path={'/music'}>
              <Music />
            </Route>
            <Route path={'/settings'}>
              <Settings />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
