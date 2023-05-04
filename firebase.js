// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCe-uckFJO-HVnvh4IW0g22Imhj53n7vQ",
  authDomain: "todo-app-yt-dcbc5.firebaseapp.com",
  projectId: "todo-app-yt-dcbc5",
  storageBucket: "todo-app-yt-dcbc5.appspot.com",
  messagingSenderId: "535126128245",
  appId: "1:535126128245:web:6d50f90dfde1e6c1c8ea3c",
  measurementId: "G-MXXS0NF4LD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
