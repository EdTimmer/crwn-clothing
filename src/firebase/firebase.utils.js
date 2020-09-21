import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCfPzKEKuNp6h4Tui5wSpwlfpe9H9TFSRo",
  authDomain: "crwn-db-4e0a3.firebaseapp.com",
  databaseURL: "https://crwn-db-4e0a3.firebaseio.com",
  projectId: "crwn-db-4e0a3",
  storageBucket: "crwn-db-4e0a3.appspot.com",
  messagingSenderId: "343632209109",
  appId: "1:343632209109:web:82031331d8ce1ec801ee5c",
  measurementId: "G-ZQ6HLTVGQK",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;