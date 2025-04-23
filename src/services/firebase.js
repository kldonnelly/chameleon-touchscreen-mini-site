// Add Firebase to your JavaScript project
// https://firebase.google.com/docs/web/setup

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBF5yrz6u6F_eJ84EcRvmyzSXrFE0xNJKs",
  authDomain: "chameleon-isb.firebaseapp.com",
  databaseURL: "https://chameleon-isb.firebaseio.com",
  projectId: "chameleon-isb",
  storageBucket: "chameleon-isb.appspot.com",
  messagingSenderId: "958735992850",
  appId: "1:958735992850:web:9f32028385624fa950b0cb"
};

// Initialize Firebase
//firebase.initializeApp(firebaseConfig);