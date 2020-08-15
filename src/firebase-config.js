// src/firebase-config.js

import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBMgYcu4ifbQd5o29cfYbLuZ4SWYfdYHuI",
    authDomain: "freakyjolly-c91ee.firebaseapp.com",
    databaseURL: "https://freakyjolly-c91ee.firebaseio.com",
    projectId: "freakyjolly-c91ee",
    storageBucket: "freakyjolly-c91ee.appspot.com",
    messagingSenderId: "997516632089",
    appId: "1:997516632089:web:46746c6f9815f43e2c4a88",
    measurementId: "G-V6X4RQ389S"
});

const db = firebaseApp.firestore();
export default db;