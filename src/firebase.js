import "firebase/auth";
import "firebase/firestore";
import firebase from 'firebase/compat/app';
import { authState } from "rxfire/auth";
import { collectionData } from "rxfire/firestore";
import { filter } from "rxjs/operators";
const app = firebase.initializeApp({
    apiKey: "AIzaSyD7IVKm4pg_IG3FIYjzqrjVVet7KocGKcM",
    authDomain: "edinburgh-pubs-24942.firebaseapp.com",
    projectId: "edinburgh-pubs-24942",
    storageBucket: "edinburgh-pubs-24942.appspot.com",
    messagingSenderId: "600769056466",
    appId: "1:600769056466:web:ae2e55b79a8c7661eea70b",
    measurementId: "G-HC10EHXZBN"
});
const firestore = firebase.firestore(app); // Initialize firestore
const auth = firebase.auth(app); // Initialize firebase auth 
const loggedIn$ = authState(auth).pipe(filter(user => !!user)); // Observable only return when user is logged in. 
export { app, auth, firestore, collectionData, loggedIn$ }; 
export default firebase;

