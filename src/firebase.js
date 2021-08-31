import firebase  from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCu85U1-oIwNxe06iqh2rB8EfqaLcTaFgY",
    authDomain: "challenge-dcef7.firebaseapp.com",
    projectId: "challenge-dcef7",
    storageBucket: "challenge-dcef7.appspot.com",
    messagingSenderId: "524307523009",
    appId: "1:524307523009:web:59c8ec1619f44a324b7b40"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const auth = firebase.auth();

  export {auth , db};