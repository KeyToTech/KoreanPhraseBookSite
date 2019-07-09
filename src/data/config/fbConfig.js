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

export default firebase;
