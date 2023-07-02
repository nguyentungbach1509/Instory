import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyBLcKsWbhRsQ7eV83a4agznAvV_ta9QvS0",
  authDomain: "instory-app-e9db1.firebaseapp.com",
  projectId: "instory-app-e9db1",
  storageBucket: "instory-app-e9db1.appspot.com",
  messagingSenderId: "897651805320",
  appId: "1:897651805320:web:025d0419912648e00be33d",
  measurementId: "G-X7G67G57HY"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};
