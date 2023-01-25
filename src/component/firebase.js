// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSPjnKJDPDDT5hw1RYQkjlc5wAdKN47Ao",
  authDomain: "cat-gather.firebaseapp.com",
  projectId: "cat-gather",
  storageBucket: "cat-gather.appspot.com",
  messagingSenderId: "424676558667",
  appId: "1:424676558667:web:cc8f0d8e3b8c6c2ba00ace",
  measurementId: "G-EZ0435Q28S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);