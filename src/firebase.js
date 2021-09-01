import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBmBXw-_kPHjsUlMV1zlewL2PKueEw-5vs",
    authDomain: "clone-ac59c.firebaseapp.com",
    projectId: "clone-ac59c",
    storageBucket: "clone-ac59c.appspot.com",
    messagingSenderId: "230402700367",
    appId: "1:230402700367:web:deade65eda404c8212663a"
  
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };