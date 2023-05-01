import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyD21-8jrgIaXFD7vyynuOtQ9ifdcbnTkks",
  authDomain: "instory-ec9a7.firebaseapp.com",
  projectId: "instory-ec9a7",
  storageBucket: "instory-ec9a7.appspot.com",
  messagingSenderId: "482723007215",
  appId: "1:482723007215:web:6089de4b0648c42b0fe91a",
  measurementId: "G-HYZM35F2DP"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};