// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8sseGzqdl7sm85dPpB3bviaHkrLschGg",
  authDomain: "edfry-9ac00.firebaseapp.com",
  projectId: "edfry-9ac00",
  storageBucket: "edfry-9ac00.appspot.com",
  messagingSenderId: "650035304855",
  appId: "1:650035304855:web:318cf72ca03c695c6e0cd2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)