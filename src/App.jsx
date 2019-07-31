import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route ,Switch} from 'react-router-dom'
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import News from './components/News/News';

function App() {
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
        <Route exact path="/dialogs" component={Dialogs} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/news" component={News} />
        <Route exact path="/music" component={Music} />
        <Route exact path="/settings" component={Settings} />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
