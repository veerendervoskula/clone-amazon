import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBmkncRYFuIWvVzHJXMC9JIci9SUept-Mw",
    authDomain: "amz-clone-6f040.firebaseapp.com",
    databaseURL: "https://amz-clone-6f040.firebaseio.com",
    projectId: "amz-clone-6f040",
    storageBucket: "amz-clone-6f040.appspot.com",
    messagingSenderId: "1065824616535",
    appId: "1:1065824616535:web:db5dec49ca95271cc32312",
    measurementId: "G-D8MHFCZZPH"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }