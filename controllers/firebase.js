// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFUiAj3x6LRFERhB0hpmCD3BX6JSstNec",
  authDomain: "logincomfamajb.firebaseapp.com",
  projectId: "logincomfamajb",
  storageBucket: "logincomfamajb.appspot.com",
  messagingSenderId: "727689436438",
  appId: "1:727689436438:web:6a196593af7396e19e4437",
  measurementId: "G-7KL1NHS4WX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);