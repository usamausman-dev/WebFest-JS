
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import { getDatabase, ref, push, set, onValue } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js";

// Initialize Firebase
const app = initializeApp({
    apiKey: "AIzaSyBuBp7kKiExFZni72FvztMU28MxEgoIBpI",
    authDomain: "webfest2022.firebaseapp.com",
    projectId: "webfest2022",
    storageBucket: "webfest2022.appspot.com",
    messagingSenderId: "997146638602",
    appId: "1:997146638602:web:86074600cd954b585ce2f3"
});

// Get a reference to the database service
const db = getDatabase(app);
submit.addEventListener('click', (e) => {
    // console.log("Running")
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // console.log(name, email, password)

    var data = {
        username: name,
        email: email,
        password: password
    }

    // set(ref(db, 'users/'), data);


    const postListRef = ref(db, 'users/');
    const newPostRef = push(postListRef);
    set(newPostRef, data);
})

const dbRef = ref(db, 'users/');

onValue(dbRef, (snapshot) => {
    snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
        console.log(childData);
        console.log(childKey)

        var genHTML = `<div class="card my-5" style="width: 18rem;">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">${childData.username}</li>
                                <li class="list-group-item">${childData.email}</li>
                                <li class="list-group-item">${childData.password}</li>
                            </ul>
                        </div>`

        document.getElementById('myContent').innerHTML += genHTML



        // ...
    });
}, {
    onlyOnce: true
});


