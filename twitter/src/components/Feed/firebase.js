import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDnwuoE7yMzMIm_J79jDC5SB9tZBEzIOik",
  authDomain: "twitter-5eaed.firebaseapp.com",
  projectId: "twitter-5eaed",
  storageBucket: "twitter-5eaed.appspot.com",
  messagingSenderId: "242497852278",
  appId: "1:242497852278:web:67e2d194eac00748b1e057"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;