
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyArROD8YtoZqfRi2fjiV0-0_ybuJxQMbnc",
  authDomain: "redelinks-dfd89.firebaseapp.com",
  projectId: "redelinks-dfd89",
  storageBucket: "redelinks-dfd89.appspot.com",
  messagingSenderId: "713699235119",
  appId: "1:713699235119:web:de671f6defe5c27e293dda"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

export { auth, db };