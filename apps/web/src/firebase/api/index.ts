import { type Firestore, getFirestore } from "firebase/firestore";
import { firebaseApp } from "..";

// let firestoreDb: Firestore;

const firestoreDb = getFirestore(firebaseApp);

export { firestoreDb };
