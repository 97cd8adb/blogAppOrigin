// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import App from "./App";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWPqAjAsXWu864kEuA_gStTEGy1aGRhUo",
  authDomain: "blogapporigin.firebaseapp.com",
  projectId: "blogapporigin",
  storageBucket: "blogapporigin.firebasestorage.app",
  messagingSenderId: "280500080709",
  appId: "1:280500080709:web:924786103bda0aa074932c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;