import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route } from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from "./components/Header/HeaderContainer";

function App(props) {
  return (
    
      <div className="app-wrapper">
        <div className="app-wrapper-header">
          <HeaderContainer />
        </div>
        <div className="app-wrapper-navbar">
          <Navbar />
        </div>
        <div className="app-wrapper-dialogs">
          <Route
             path="/dialogs"
            render={() => ( <DialogsContainer />
            )}
          />
          <Route
             path="/profile/:userId?"
            render={() => ( <ProfileContainer /> )}
          />
          <Route
             path="/users"
            render={() => ( <UsersContainer /> )}
          />
          <Route exact path="/news" render={() => <News />} />
          <Route exact path="/music" render={() => <Music />} />
          <Route exact path="/settings" render={() => <Settings />} />
        </div>
      </div>
  );
}

export default App;
