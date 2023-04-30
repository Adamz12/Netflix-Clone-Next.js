// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALlNsnQIVuhaQHIkx0D6F56Ra7ivfQ6kM",
  authDomain: "netlix-clone-yt.firebaseapp.com",
  projectId: "netlix-clone-yt",
  storageBucket: "netlix-clone-yt.appspot.com",
  messagingSenderId: "955619520698",
  appId: "1:955619520698:web:d31b2baa43fc7fa58b5283",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
