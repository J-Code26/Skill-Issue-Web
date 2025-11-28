import { auth, db } from "./firebase.js";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

import {
    setDoc,
    getDoc,
    doc
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

// LOGIN BUTTON
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const message = document.getElementById("loginMsg");

// LOGIN
if (loginBtn) {
    loginBtn.onclick = async () => {
        const email = email.value;
        const password = password.value;

        try {
            await signInWithEmailAndPassword(auth, email, password);
            location.href = "index.html";
        } catch (err) {
            message.textContent = err.message;
        }
    };
}

// SIGNUP
if (signupBtn) {
    signupBtn.onclick = async () => {
        const email = email.value;
        const password = password.value;

        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);

            // Create a database entry for this user
            await setDoc(doc(db, "users", user.user.uid), {
                correct: 0,
                wrong: 0,
                skill: 0,
                life: 3
            });

            message.textContent = "Account created! You can now log in.";
        } catch (err) {
            message.textContent = err.message;
        }
    };
}

let currentUser = null;
// AUTO REDIRECT — Protect game page
onAuthStateChanged(async (user) => {
    if (user) {
        currentUser = user;
        await loadStats(); // load their saved stats
    } else {
        currentUser = null;
        console.log("No user logged in");
    }
});
