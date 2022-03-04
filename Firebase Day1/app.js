import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";


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

SignUP.addEventListener('click', (e) => {
    var email = document.getElementById('semail').value;
    var password = document.getElementById('spassword').value;

    // console.log(email + "" + password);

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
            // ..
        });


})


SignIn.addEventListener('click', (e) => {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    console.log(email + "" + password);

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        });

})


googleSignIn.addEventListener('click', (e) => {
    // console.log("Chal Raha Hon Bhai");
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(user)

            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            alert(errorMessage);
            // ...
        });

})

// onAuthStateChanged(auth, (user) => {
//     if (user) {
//         // User is signed in, see docs for a list of available properties
//         // https://firebase.google.com/docs/reference/js/firebase.User
//         const uid = user.uid;

//         console.log(user)
//         // ...
//     } else {
//         // User is signed out
//         // ...
//     }
// });






