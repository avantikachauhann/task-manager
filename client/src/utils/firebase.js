// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "tm-task-manager.firebaseapp.com",
  projectId: "tm-task-manager",
  storageBucket: "tm-task-manager.firebasestorage.app",
  messagingSenderId: "95164260701",
  appId: "1:95164260701:web:93f0fdac0b2bf36cd648b4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
