import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDB8RpixVPrBOKWFSTjf6aXjwvTHRxWPd8",
  authDomain: "bodegareactjs.firebaseapp.com",
  projectId: "bodegareactjs",
  storageBucket: "bodegareactjs.appspot.com",
  messagingSenderId: "905680939724",
  appId: "1:905680939724:web:63c955f9f697028d77b069",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();

export default db;
