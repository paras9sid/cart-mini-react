//latest version use imports like below
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {

    //firebse config , remove everytime you git push

  

};

//latest version initiliaze and export db like this below
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

