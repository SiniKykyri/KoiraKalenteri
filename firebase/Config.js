// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc, serverTimestamp, query, onSnapshot, doc, orderBy} from 'firebase/firestore';
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCgqGvO9vvul95HAaTLM1QGN759gKL9_kk",
    authDomain: "fir-1daa3.firebaseapp.com",
    projectId: "fir-1daa3",
    storageBucket: "fir-1daa3.appspot.com",
    messagingSenderId: "774144450975",
    appId: "1:774144450975:web:064686a2e4e56faecbddaa"
  };

const FIREBASE_APP = initializeApp(firebaseConfig)
const FIREBASE_AUTH = getAuth(FIREBASE_APP)


const firestore = getFirestore()
const MESSAGES = 'messages'

export {
    firestore,
    collection,
    addDoc,
    serverTimestamp,
    MESSAGES,
    query,
    onSnapshot,
    doc,
    orderBy,
    FIREBASE_APP,
    FIREBASE_AUTH,


}

