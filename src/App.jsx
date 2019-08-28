import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <div className="app-wrapper-header">
          <Header />
        </div>
        <div className="app-wrapper-navbar">
          <Navbar />
        </div>
        <div className="app-wrapper-dialogs">
          <Route
            exact
            path="/dialogs"
            render={() => (
              <Dialogs
                dispatch={props.dispatch}
                dialogsPage={props.state.dialogsPage}
              />
            )}
          />
          <Route
            exact
            path="/profile"
            render={() => (
              <Profile
                dispatch={props.dispatch}
                newPostText={props.state.mypostPage.newPostText}
                messagesData={props.state.mypostPage.messagesData}
              />
            )}
          />
          <Route exact path="/news" render={() => <News />} />
          <Route exact path="/music" render={() => <Music />} />
          <Route exact path="/settings" render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
