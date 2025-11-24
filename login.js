
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

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

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginMsg = document.getElementById("loginMsg");
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");

// Sign Up
signupBtn.addEventListener("click", () => {
    const email = emailInput.value;
    const password = passwordInput.value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            loginMsg.textContent = "Account created!";
            loginMsg.style.color = "green";
        })
        .catch((error) => {
            loginMsg.textContent = error.message;
            loginMsg.style.color = "red";
        });
});

// Log In
loginBtn.addEventListener("click", () => {
    const email = emailInput.value;
    const password = passwordInput.value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            loginMsg.textContent = "Login successful!";
            loginMsg.style.color = "green";
            // Redirect to main game
            window.location.href = "index.html";
        })
        .catch((error) => {
            loginMsg.textContent = error.message;
            loginMsg.style.color = "red";
        });
});

