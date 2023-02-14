import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyCRVnGwzpOe8H0Cd1wr_qgeoBrUvslUdqc",
  authDomain: "personal-website-8af4a.firebaseapp.com",
  databaseURL: "https://personal-website-8af4a.firebaseio.com",
  projectId: "personal-website-8af4a",
  storageBucket: "personal-website-8af4a.appspot.com",
  messagingSenderId: "386526278864",
  appId: "1:386526278864:web:8560de4c9bd6fb7a26dad5",
  measurementId: "G-KV60RZRV91",
};

const app = initializeApp(config);

export const firestore = getFirestore(app);
