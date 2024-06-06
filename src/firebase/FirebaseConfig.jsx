// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlxtGkh2PJK7nqa1kfcwwgAEwZrNdsOc8",
  authDomain: "reactecommerce-af8ef.firebaseapp.com",
  projectId: "reactecommerce-af8ef",
  storageBucket: "reactecommerce-af8ef.appspot.com",
  messagingSenderId: "495657876479",
  appId: "1:495657876479:web:956b4637d409afcefb45ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }