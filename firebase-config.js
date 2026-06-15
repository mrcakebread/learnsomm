// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.x.x/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.x.x/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsmpFOWKhVaUZD4EQR24AtOpyKDX2JhGg",
  authDomain: "mark-s-wine-training.firebaseapp.com",
  projectId: "mark-s-wine-training",
  storageBucket: "mark-s-wine-training.firebasestorage.app",
  messagingSenderId: "424279465207",
  appId: "1:424279465207:web:7be6d1a760bc92d045c7f2",
  measurementId: "G-8DYB4HMKMF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export the app so other files can use it
export { app };