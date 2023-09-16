import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCP-jxKZFIrQJPUMU-faW3OHjK_I7eeyck",
  authDomain: "movieverse-9fd45.firebaseapp.com",
  projectId: "movieverse-9fd45",
  storageBucket: "movieverse-9fd45.appspot.com",
  messagingSenderId: "702789732219",
  appId: "1:702789732219:web:47d49ad702004a6a581fde"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;