// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4LuA6FK1zrew4FCyFvAtJewwKK3no3SU",
  authDomain: "portfolio-website-665f9.firebaseapp.com",
  projectId: "portfolio-website-665f9",
  storageBucket: "portfolio-website-665f9.appspot.com",
  messagingSenderId: "724127467767",
  appId: "1:724127467767:web:1cdd0fb0de6ceddcbc2bf2",
  measurementId: "G-7HHM8QMHS2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
