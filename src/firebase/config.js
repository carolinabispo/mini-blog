// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0dh8K8e6X36V5AMjsy-DVik4uvdL96vk",
  authDomain: "mini-blog-fc6b2.firebaseapp.com",
  projectId: "mini-blog-fc6b2",
  storageBucket: "mini-blog-fc6b2.appspot.com",
  messagingSenderId: "157189402867",
  appId: "1:157189402867:web:13545db34c044e740c4786",
  measurementId: "G-CRL8YKW442",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore(app);
export { db,app };
