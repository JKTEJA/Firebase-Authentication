import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBtRINfOrIxy2tmTcGC10NfP9zIPqfzOx0",
    authDomain: "food-recipe-react-app-main.firebaseapp.com",
    projectId: "food-recipe-react-app-main",
    storageBucket: "food-recipe-react-app-main.appspot.com",
    messagingSenderId: "552125819716",
    appId: "1:552125819716:web:cc8d5ead148a6113290511"
  };
  // Initialize Firebase
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };