import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD1V0vd3QiyN-SRJ3bb6BNNQjxoLMQMgfc",
    authDomain: "korean-phrase-project.firebaseapp.com",
    databaseURL: "https://korean-phrase-project.firebaseio.com",
    projectId: "korean-phrase-project",
    storageBucket: "",
    messagingSenderId: "967271916427",
    appId: "1:967271916427:web:a777e375c8cda680"
  };

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
