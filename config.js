import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyC9p5prteUEQwNPrzND-eyyl7AymctDPTk",
    authDomain: "e-ride-f0590.firebaseapp.com",
    projectId: "e-ride-f0590",
    storageBucket: "e-ride-f0590.appspot.com",
    messagingSenderId: "1065805081654",
    appId: "1:1065805081654:web:73cfa5d512b01b9bd57c97"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
