import './assets/styles/App.scss';
import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Switch, Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
  return (
    <div className={'app-wrapper'}>
      <Header/>
      {/*<Navbar sidebar={props.state.sidebar}/>*/}
      <Navbar />
      <main className="app-wrapper-content">
        <Switch>
          <Route path={'/profile'}>
            <Profile />
          </Route>
          <Route path={'/dialogs'}>
            <Dialogs />
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
  );
}

export default App;
