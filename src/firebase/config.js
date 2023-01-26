
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDkjRwdCubXvA_DonTBOHJK1QgQ04EJyCQ",
  authDomain: "react-firebase-3b883.firebaseapp.com",
  projectId: "react-firebase-3b883",
  storageBucket: "react-firebase-3b883.appspot.com",
  messagingSenderId: "767474505913",
  appId: "1:767474505913:web:b3d72972e1ace32df92368"
};


 initializeApp(firebaseConfig);
 const db = getFirestore();
 const auth = getAuth();

export  { db, auth}