// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIfWShlvzxBDqLw91WnVwPlk6hgzQ-Lko",
  authDomain: "metalins-5d985.firebaseapp.com",
  projectId: "metalins-5d985",
  storageBucket: "metalins-5d985.appspot.com",
  messagingSenderId: "825535643362",
  appId: "1:825535643362:web:72ded22da2800b2bdd68bb",
  measurementId: "G-30MGE9Q4G5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
