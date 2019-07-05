import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAG77X8AojhSW1m2X5r3y55iaPn3fUU8jA",
  authDomain: "koreanwords-b154b.firebaseapp.com",
  databaseURL: "https://koreanwords-b154b.firebaseio.com",
  projectId: "koreanwords-b154b",
  storageBucket: "koreanwords-b154b.appspot.com",
  messagingSenderId: "258968689768",
  appId: "1:258968689768:web:b2a03809f87a3410"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
