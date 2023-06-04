import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyCtICiRc5aW5XGZswXEwyYdjUNyKGeM6rM",
  authDomain: "instory-app-f84ed.firebaseapp.com",
  projectId: "instory-app-f84ed",
  storageBucket: "instory-app-f84ed.appspot.com",
  messagingSenderId: "424171683889",
  appId: "1:424171683889:web:5e481d0c79679e38e41510",
  measurementId: "G-PQP468BMRB"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};
