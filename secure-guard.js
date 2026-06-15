// secure-guard.js
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.x.x/firebase-auth.js";
import { app } from "./firebase-config.js"; // Your existing config

const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
    if (!user) {
        // User not logged in, redirect to login page
        window.location.href = 'login.html';
    } else {
        // User is logged in, reveal the content
        document.body.style.display = 'block';
    }
});