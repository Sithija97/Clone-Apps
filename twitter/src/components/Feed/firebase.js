import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDPshZWEgEwzB8eSuhzgDrDHOAF4xe86N0",
    authDomain: "clones-abb28.firebaseapp.com",
    projectId: "clones-abb28",
    storageBucket: "clones-abb28.appspot.com",
    messagingSenderId: "645235396941",
    appId: "1:645235396941:web:a699253e6016c5d790a704"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  export default db;