// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEPEr6KcNutRxDzviRxYA1FiAvidd140c",
  authDomain: "project-react1312.firebaseapp.com",
  projectId: "project-react1312",
  storageBucket: "project-react1312.appspot.com",
  messagingSenderId: "429319908753",
  appId: "1:429319908753:web:33364df42568bd2428fe30"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
