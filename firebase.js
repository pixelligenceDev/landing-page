// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxctCKWUXPvDtys8FNYo2yRDOALaCW5xI",
  authDomain: "pixelligence-landing-page.firebaseapp.com",
  projectId: "pixelligence-landing-page",
  storageBucket: "pixelligence-landing-page.firebasestorage.app",
  messagingSenderId: "1083038698152",
  appId: "1:1083038698152:web:43f78ecc8020000ea9109d",
  measurementId: "G-QCE2MN8TSL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
