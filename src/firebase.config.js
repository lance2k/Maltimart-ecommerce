import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_KEY,
	authDomain: "eductionery-73e39.firebaseapp.com",
	projectId: "eductionery-73e39",
	storageBucket: "eductionery-73e39.appspot.com",
	messagingSenderId: "612682965678",
	appId: "1:612682965678:web:1e7f153fbb634d128e833f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
