import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";

var config = {
  apiKey: "AIzaSyCuXmSeqsZ5IErCyqvfPut4TW_Ei7zl7p8",
  authDomain: "mancity-a9fb9.firebaseapp.com",
  databaseURL: "https://mancity-a9fb9.firebaseio.com",
  projectId: "mancity-a9fb9",
  storageBucket: "mancity-a9fb9.appspot.com",
  messagingSenderId: "1098416425598"
};
firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref("matches");

export { firebase, firebaseMatches };
