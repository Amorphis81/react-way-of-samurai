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

const App = () => {
  const dialogsData = [
    {id: 1, name: 'Nike'},
    {id: 2, name: 'Mike'},
    {id: 3, name: 'Tramp'},
    {id: 4, name: 'Obama'},
    {id: 5, name: 'Alex'},
    {id: 6, name: 'Victor'},
  ]

  const messagesData = [
    {id: 1, message: 'Hi hi'},
    {id: 2, message: 'Ho ho'},
    {id: 3, message: 'Hu hu'},
  ]


  return (
    <Router>
      <div className={'app-wrapper'}>
        <Header/>
        <Navbar/>
        <main className="app-wrapper-content">
          <Switch>
            <Route path={'/profile'}>
              <Profile />
            </Route>
            <Route path={'/dialogs'}>
              <Dialogs dialogsData = {dialogsData} messagesData={messagesData}/>
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
