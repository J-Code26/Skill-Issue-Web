// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBbgSazwxVUp-zFbvEW0mu6myuKtR_VeIE",
    authDomain: "skill-issue-web.firebaseapp.com",
    projectId: "skill-issue-web",
    storageBucket: "skill-issue-web.firebasestorage.app",
    messagingSenderId: "850520466993",
    appId: "1:850520466993:web:39f10757d065269e9c1710",
    measurementId: "G-L90L1TN647"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export{ auth, db };