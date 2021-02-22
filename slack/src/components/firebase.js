import firebase from 'firebase'

/**
 * initialize
 * db
 * auth
 * provider
 */

const firebaseConfig = {
    apiKey: "AIzaSyDPshZWEgEwzB8eSuhzgDrDHOAF4xe86N0",
    authDomain: "clones-abb28.firebaseapp.com",
    projectId: "clones-abb28",
    storageBucket: "clones-abb28.appspot.com",
    messagingSenderId: "645235396941",
    appId: "1:645235396941:web:b9656560c29ed23f90a704"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { auth, provider }
  export default db;