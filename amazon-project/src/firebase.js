import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB2BWFGCNcaNv4BCuuN4V6cScfvNZ8b6hvg",
  authDomain: "project-72119.firebaseapp.com",
  projectId: "project-72119",
  storageBucket: "project072119.appspot.com",
  messagingSenderId: "478925126893",
  appId: "1:478925126893:web:7b15671b983e9220ae20e4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
