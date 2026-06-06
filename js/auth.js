import { auth } from "./firebase-config.js";

import {
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const loginBtn = document.getElementById("googleLogin");

loginBtn.addEventListener("click", async () => {
  try {
    const provider = new GoogleAuthProvider();

    const result = await signInWithPopup(auth, provider);

    const email = result.user.email;

    if (!email.endsWith("@cpu.edu.ph")) {
      alert("Use school email.");

      return;
    }

    window.location.href = "dashboard.html";
  } catch (error) {
    console.error(error);
  }
});
