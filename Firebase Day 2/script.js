
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-storage.js";

// Initialize Firebase
const app = initializeApp({
    apiKey: "AIzaSyBuBp7kKiExFZni72FvztMU28MxEgoIBpI",
    authDomain: "webfest2022.firebaseapp.com",
    projectId: "webfest2022",
    storageBucket: "webfest2022.appspot.com",
    messagingSenderId: "997146638602",
    appId: "1:997146638602:web:86074600cd954b585ce2f3"
});

uploadImage.addEventListener('click', (e) => {



    var imageFile = document.getElementById('formFile').files[0]
    console.log(imageFile.name)

    const storage = getStorage(app);
    const storageRef = ref(storage, 'images/' + imageFile.name);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);


    uploadTask.on('state_changed',
        (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
        },

        (error) => {
            // Handle unsuccessful uploads
        },
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);
            });
        }
    );

})



