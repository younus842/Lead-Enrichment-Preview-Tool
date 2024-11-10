import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDP1ZLn7Z_bjMTxzvXZqZ-j9j6tXVMtVzk",
  authDomain: "authentication-263ee.firebaseapp.com",
  projectId: "authentication-263ee",
  storageBucket: "authentication-263ee.firebasestorage.app",
  messagingSenderId: "1072047314351",
  appId: "1:1072047314351:web:985c7f985c36081a680b5a"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app