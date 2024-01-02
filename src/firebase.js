import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAAUO83Hfq3JwLOe6wVEz15RnKc7bWxiZE",
  authDomain: "authspa-3ca58.firebaseapp.com",
  projectId: "authspa-3ca58",
  storageBucket: "authspa-3ca58.appspot.com",
  messagingSenderId: "870727734072",
  appId: "1:870727734072:web:46e773fdb1375aded127cd",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
