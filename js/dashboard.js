import { auth, db } from "./firebase-config.js";

import {
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", () => {
  signOut(auth);

  window.location.href = "index.html";
});

onAuthStateChanged(auth, async (user) => {
  if (!user) {
    window.location.href = "index.html";

    return;
  }

  const email = user.email;

  const studentDoc = await getDoc(doc(db, "students", email));

  if (!studentDoc.exists()) {
    alert("No grade record found.");

    return;
  }

  const data = studentDoc.data();

  document.getElementById("studentName").textContent = data.name;

  document.getElementById("studentEmail").textContent = email;

  document.getElementById("studentCourse").textContent = data.course;

  // document.getElementById(
  //     "midterm"
  // ).textContent =
  // data.midterm;

  document.getElementById("final").textContent = data.final;

  document.getElementById("remarks").textContent =
    data.final <= 3 ? "PASSED" : "FAILED";
});
