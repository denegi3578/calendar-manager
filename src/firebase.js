import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCEhE4PnoVE2o78oHP96vvAfxCAT5JTUNc",
  authDomain: "calendar-tasks-app-af56c.firebaseapp.com",
  projectId: "calendar-tasks-app-af56c",
  storageBucket: "calendar-tasks-app-af56c.firebasestorage.app",
  messagingSenderId: "826095110644",
  appId: "1:826095110644:web:361e70b41587890fab91a1",
  measurementId: "G-W43PNX9L5S"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
