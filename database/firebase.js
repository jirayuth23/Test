import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCyxrPF-uudiNGlmNDqsnShGJrbSUV7MiQ",
    authDomain: "where-s-quarry.firebaseapp.com",
    databaseURL: "https://where-s-quarry.firebaseio.com",
    projectId: "where-s-quarry",
    storageBucket: "where-s-quarry.appspot.com",
    messagingSenderId: "661232819006",
    appId: "1:661232819006:web:4f55fdd3a601110df7aa6f",
    measurementId: "G-088EC4VE0K"
};

firebase.initializeApp(firebaseConfig);

export default firebase;