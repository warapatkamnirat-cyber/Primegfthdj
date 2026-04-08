import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getFirestore, doc, setDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDne6T2ZmFrqP4idNGNHfp0CipTUxLkXHo",
  authDomain: "prime-store-487ac.firebaseapp.com",
  projectId: "prime-store-487ac",
  storageBucket: "prime-store-487ac.firebasestorage.app",
  messagingSenderId: "312275328003",
  appId: "1:312275328003:web:92459c25dde3fd115c0236",
  measurementId: "G-M8R7C11D8Z"
};

// Initialize
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// ส่งออกตัวแปรและฟังก์ชันที่จำเป็นไปไว้ที่ Window เพื่อให้เรียกใช้ได้จากทุกที่
window.auth = auth;
window.db = db;
window.GoogleAuthProvider = GoogleAuthProvider;
window.FacebookAuthProvider = FacebookAuthProvider;
window.signInWithPopup = signInWithPopup;
window.doc = doc;
window.setDoc = setDoc;
window.serverTimestamp = serverTimestamp;
