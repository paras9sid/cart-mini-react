import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {

    //firebse config , remove everytime you git push

    apiKey: "AIzaSyCSNMt9lGYshOYKWRgLUDnWbqpNXa-hx3I",
    authDomain: "cart-e43c0.firebaseapp.com",
    projectId: "cart-e43c0",
    storageBucket: "cart-e43c0.appspot.com",
    messagingSenderId: "807297163358",
    appId: "1:807297163358:web:a1d7773facfc314cdf14cf"

};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

