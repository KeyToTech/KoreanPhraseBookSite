import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAG77X8AojhSW1m2X5r3y55iaPn3fUU8jA",
  authDomain: "koreanwords-b154b.firebaseapp.com",
  databaseURL: "https://koreanwords-b154b.firebaseio.com",
  projectId: "koreanwords-b154b",
  storageBucket: "koreanwords-b154b.appspot.com",
  messagingSenderId: "258968689768",
  appId: "1:258968689768:web:b2a03809f87a3410"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyD1V0vd3QiyN-SRJ3bb6BNNQjxoLMQMgfc",
//   authDomain: "korean-phrase-project.firebaseapp.com",
//   databaseURL: "https://korean-phrase-project.firebaseio.com",
//   projectId: "korean-phrase-project",
//   storageBucket: "korean-phrase-project.appspot.com",
//   messagingSenderId: "967271916427",
//   appId: "1:967271916427:web:9c4558cc6f47d7a6"
// };

firebase.initializeApp(firebaseConfig);

export default firebase;
