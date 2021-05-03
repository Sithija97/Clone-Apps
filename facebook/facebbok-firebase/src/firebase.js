import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCGhPtw1loDkSqnJRNN78SpzdaUZR6-NXQ",
  authDomain: "facebook-9626b.firebaseapp.com",
  projectId: "facebook-9626b",
  storageBucket: "facebook-9626b.appspot.com",
  messagingSenderId: "978587175102",
  appId: "1:978587175102:web:5828861ce821c80893f6ef"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db;