
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBdW3nV5HhJHqRq9rJr3RjceZYuVwESHBA",
  authDomain: "podacst-ai.firebaseapp.com",
  projectId: "podacst-ai",
  storageBucket: "podacst-ai.appspot.com",
  messagingSenderId: "673267843595",
  appId: "1:673267843595:web:a933a37f7ff813dd78bd0e"
};


const app = initializeApp(firebaseConfig);

export default app;