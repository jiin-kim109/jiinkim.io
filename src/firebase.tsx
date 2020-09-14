import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA5S3wUJGFY8D7tFI85eIZSxsPjYwB2YKM",
    authDomain: "portfolio-temp-faa41.firebaseapp.com",
    databaseURL: "https://portfolio-temp-faa41.firebaseio.com",
    projectId: "portfolio-temp-faa41",
    storageBucket: "portfolio-temp-faa41.appspot.com",
    messagingSenderId: "696995990677",
    appId: "1:696995990677:web:98cb3f46bcc805f5001f9c"
};


if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const firebaseApp = firebase.app();
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }; 
export default db;