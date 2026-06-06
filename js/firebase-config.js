import { initializeApp } from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { getFirestore }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAvFxeq0YyENrqR5R4riF_HzkAdyIhxQ88",
  authDomain: "student-grade-portal-c034b.firebaseapp.com",
  projectId: "student-grade-portal-c034b",
  storageBucket: "student-grade-portal-c034b.firebasestorage.app",
  messagingSenderId: "223609963006",
  appId: "1:223609963006:web:b9147401586c85e82a00af"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);



