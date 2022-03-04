import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";


// Initialize Firebase
const app = initializeApp({
    apiKey: "AIzaSyBuBp7kKiExFZni72FvztMU28MxEgoIBpI",
    authDomain: "webfest2022.firebaseapp.com",
    projectId: "webfest2022",
    storageBucket: "webfest2022.appspot.com",
    messagingSenderId: "997146638602",
    appId: "1:997146638602:web:86074600cd954b585ce2f3"
});

const auth = getAuth(app);


SendEmail.addEventListener('click', (e) => {
    var email = document.getElementById('resetEmail').value;
    console.log(email)
    sendPasswordResetEmail(auth, email)
        .then(() => {
            // Password reset email sent!
            // ..
            alert('Sent Successfully, Kindly Check your Email');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
            // ..
        });
})
