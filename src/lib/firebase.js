import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZRcIxRkXmF5059Isvct4smIle1WN0bj4",
  authDomain: "money-tracker-a55be.firebaseapp.com",
  projectId: "money-tracker-a55be",
  storageBucket: "money-tracker-a55be.appspot.com",
  messagingSenderId: "892912624098",
  appId: "1:892912624098:web:af7dc2b975a0719e2f19bb",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };
