import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4rEgwMpOsptefh-m4nImMzP7JZmHR8Yo",
  authDomain: "facebook-clone-cace1.firebaseapp.com",
  databaseURL: "https://facebook-clone-cace1.firebaseio.com",
  projectId: "facebook-clone-cace1",
  storageBucket: "facebook-clone-cace1.appspot.com",
  messagingSenderId: "245587609403",
  appId: "1:245587609403:web:aebab3d4256b0ef670191e",
  measurementId: "G-NQ79B55T1M",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
