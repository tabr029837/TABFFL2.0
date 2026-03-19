import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "",
  authDomain: "tabfflwebsite.firebaseapp.com",
  projectId: "tabfflwebsite",
  storageBucket: "tabfflwebsite.firebasestorage.app",
  messagingSenderId: "229042475467",
  appId: "1:229042475467:web:ad2cccbb8cb89d5ad2e64e",
  measurementId: "G-QJT28FTXNK"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
