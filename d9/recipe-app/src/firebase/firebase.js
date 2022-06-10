// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDg5huM1ceVHzb1UGU7_L-mD5I3FducscI",
  authDomain: "recipe-e6944.firebaseapp.com",
  projectId: "recipe-e6944",
  storageBucket: "recipe-e6944.appspot.com",
  messagingSenderId: "320132491860",
  appId: "1:320132491860:web:d197da9c8c23381cca9bc1",
  measurementId: "G-XMV0ZF1Q39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {
  db  
};