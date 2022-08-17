import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBpxLmV7y7ZEa-dkF1XhNsEsRNas8re9zU",
  authDomain: "linked-in-clone-f4a09.firebaseapp.com",
  projectId: "linked-in-clone-f4a09",
  storageBucket: "linked-in-clone-f4a09.appspot.com",
  messagingSenderId: "678310543487",
  appId: "1:678310543487:web:6b8c70048c0b7a877ebf4a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth(); 

export {db, auth}
export default firebase; 