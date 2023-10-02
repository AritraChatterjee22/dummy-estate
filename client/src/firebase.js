// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "dummy-estate.firebaseapp.com",
  projectId: "dummy-estate",
  storageBucket: "dummy-estate.appspot.com",
  messagingSenderId: "563762548745",
  appId: "1:563762548745:web:fa1d915739dae97e7a28d8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
