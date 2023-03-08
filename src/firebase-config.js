import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDbJIY0c4YbwGnhKc5oyxR6I8BEHhRzJqg",
  authDomain: "blog-website-cba3f.firebaseapp.com",
  projectId: "blog-website-cba3f",
  storageBucket: "blog-website-cba3f.appspot.com",
  messagingSenderId: "77293284661",
  appId: "1:77293284661:web:325d42525a1a3eb078f07c",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
