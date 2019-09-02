import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import './index.css';
import App from './App';



let rerenderEntireTree = (state) => {
  
  ReactDOM.render(<App store={state} dispatch={store.dispatch.bind(store)} />, document.getElementById('root'));
}

rerenderEntireTree(store);
store.subscribe(() => {
  // let state = store.getState();
  rerenderEntireTree(store);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
