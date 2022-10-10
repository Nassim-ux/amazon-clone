import { initializeApp } from "firebase/app";
import {
  getAuth,
  // GoogleAuthProvider,
  // signInWithPopup,
  // signInWithEmailAndPassword,
  // createUserWithEmailAndPassword,
  // sendPasswordResetEmail,
  // signOut,
} from "firebase/auth";
import {
  getFirestore,
  // query,
  // getDocs,
  // collection,
  // where,
  // addDoc,
} from "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC78RBJJFvlLkrJC2opRyVskd4SkIj-Eys",
  authDomain: "clone-78341.firebaseapp.com",
  projectId: "clone-78341",
  storageBucket: "clone-78341.appspot.com",
  messagingSenderId: "573381997570",
  appId: "1:573381997570:web:1a494496ea26e096c0631b",
  measurementId: "G-907R95VG17",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
