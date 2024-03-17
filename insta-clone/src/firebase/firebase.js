import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBDwaXLNO5KSU3waLccEjObb9JGtgSfxMo",
  authDomain: "insta-clone-2708e.firebaseapp.com",
  projectId: "insta-clone-2708e",
  storageBucket: "insta-clone-2708e.appspot.com",
  messagingSenderId: "287445585815",
  appId: "1:287445585815:web:103636199eb607bb0efed2",
  measurementId: "G-JK5C62LJZS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app)
const storage = getStorage(app)

export {app, auth, firestore, storage};
