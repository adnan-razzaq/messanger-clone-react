import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBKOgkvozFg8mr4bcSqTrnZE09voBjHH3w",
  authDomain: "messanger-clone-670dd.firebaseapp.com",
  databaseURL: "https://messanger-clone-670dd.firebaseio.com",
  projectId: "messanger-clone-670dd",
  storageBucket: "messanger-clone-670dd.appspot.com",
  messagingSenderId: "50321057046",
  appId: "1:50321057046:web:e20705e90164f354715c37",
  measurementId: "G-ZVPJXF7R18",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
