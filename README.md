# 🎓 Student Grade Portal — [PROTOTYPE]

> ⚠️ **PROJECT STATUS: ACTIVE PROTOTYPE** > This portal is currently in a development and testing phase. Authentication is handled via sandboxed redirect loops, and database read/write access is limited to prototype testing schemas for demonstration purposes.

A secure, responsive, single-page web application that allows Central Philippine University (`@cpu.edu.ph`) students to log in with their university Google accounts to view their final grades. Built with HTML5, Tailwind CSS, and powered by Firebase (Authentication & Firestore).

## 🚀 Live Prototype Demo
Check out the live deployment here: [pithovirus.github.io/student_gradePortal](https://pithovirus.github.io/student_gradePortal/)

---

## ✨ Features

* **Google OAuth 2.0 Integration:** Restricts access strictly to authorized school email addresses (`@cpu.edu.ph`).
* **Real-time Grade Dashboard:** Instantly fetches and displays individual student details (Name, Course, and Final Grade) upon logging in.
* **CSV Mass Bulk Upload:** Admin interface (`import-data.html`) built to parse student lists exported directly from Canvas LMS and update Firestore seamlessly.
* **Idempotent Records (Upsert Data Logic):** Re-uploading files automatically overwrites/updates current grade changes or spelling corrections without duplicating records.

---

## 🛠️ Tech Stack

* **Frontend:** HTML5, JavaScript (ES6 Modules), Tailwind CSS
* **Backend Database:** Firebase Firestore
* **Authentication:** Firebase Auth (Google Sign-In Provider)
* **Hosting:** GitHub Pages

---

## 📂 Project Structure

```text
├── index.html                  # Student login landing page
├── dashboard.html              # Authenticated view displaying final grades
├── import-data.html            # Admin panel for CSV mass uploading (Prototype Only)
├── README.md                   # Documentation
├── assets/                     # Styles and static resources
└── js/                         # Logic and functional scripts
    ├── firebase-config.js      # Main Firebase initialization settings
    ├── auth.js                 # Handles Google Sign-in and domain filtering
    └── dashboard.js            # Fetches authenticated data from Firestore
