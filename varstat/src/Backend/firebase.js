// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBR5rbMXIkhhkUAxNNh_jhLnpdFTU5DAts",
  authDomain: "varsity-database.firebaseapp.com",
  projectId: "varsity-database",
  storageBucket: "varsity-database.firebasestorage.app",
  messagingSenderId: "446129793448",
  appId: "1:446129793448:web:66c471731631dc32f3159d",
  measurementId: "G-KMPDEC07C5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth(app);
export {auth};