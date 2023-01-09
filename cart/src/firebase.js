import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {

    //firebse config , remove everytime you git push

   
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

