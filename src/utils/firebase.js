// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: {your apiKey},
  authDomain: {domain name},
  projectId: "netflixgpt-7cfd6",
  storageBucket: "netflixgpt-7cfd6.appspot.com",
  messagingSenderId: "168133245042",
  appId: {appID},
  measurementId: "G-ZZLLSYZQD3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();