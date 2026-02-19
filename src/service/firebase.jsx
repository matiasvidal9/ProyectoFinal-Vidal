// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB52rRav70dWt8jGUWgE0eHjQQpb4qPwmg",
    authDomain: "look-proyect.firebaseapp.com",
    projectId: "look-proyect",
    storageBucket: "look-proyect.firebasestorage.app",
    messagingSenderId: "652913985719",
    appId: "1:652913985719:web:f3309c2b6829d7e4e7e532"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);