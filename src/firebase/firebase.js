import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC8chy2LJEAoSRDnyj-bD3wB8tnlAs85Ic",
    authDomain: "expensify-76e64.firebaseapp.com",
    databaseURL: "https://expensify-76e64.firebaseio.com",
    projectId: "expensify-76e64",
    storageBucket: "expensify-76e64.appspot.com",
    messagingSenderId: "14071102768"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };