// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCA-iNBCNUmzB1onsGL26zcbrYm2-E0sSs",
  authDomain: "react-notes-57c05.firebaseapp.com",
  projectId: "react-notes-57c05",
  storageBucket: "react-notes-57c05.appspot.com",
  messagingSenderId: "941880562587",
  appId: "1:941880562587:web:3e8683456d764e5fb3c73e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

export const notesCollection = collection(db, 'notes');