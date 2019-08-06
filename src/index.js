import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from './redux/state';



const dialogsData = [
    {id: 1, name: "Andry"},
    {id: 2, name: "Maxim"},
    {id: 3, name: "Sveta"},
    {id: 4, name: "John"},
    {id: 5, name: "Pablo"},
    {id: 6, name: "Jimm"},
  ]
  const dialogsMessage = [
    {id: 1, message: "Hi!"},
    {id: 2, message: "Ne hi"},
    {id: 3, message: "Ai Ai"},
    {id: 4, message: "Bla, Bla, Bla"},
    {id: 5, message: "Alarm!"},
    {id: 6, message: "Rock&Roll"},
  ]
  
  const postData = [
    {id: 1, likeCount: 12, name: "Tomas Mann", avatar: "img/avatar-1.png"},
    {id: 2, likeCount: 24, name: "Ernst Ham", avatar: "img/avatar-2.png"},
    {id: 3, likeCount: 31, name: "Mister Dool", avatar: "img/avatar-3.png"},
    {id: 4, likeCount: 88, name: "John Little", avatar: "img/avatar-4.png"},
    {id: 5, likeCount: 41, name: "Robin Good", avatar: "img/avatar-5.png"},
    {id: 6, likeCount: 15, name: "Richard Crosby", avatar: "img/avatar-6.png"}
  ]
  
  const messagesData = [
    {id: 1, message: "Hi, how are your?"},
    {id: 2, message: "Everyone has one's own path"},
    {id: 3, message: "If you wish to be loved, love!"},
    {id: 4, message: "Never say never"},
    {id: 5, message: "Everyone sees the world in one's own way"},
    {id: 6, message: "Never look back"}
  ]
  

ReactDOM.render(<App state={state} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
