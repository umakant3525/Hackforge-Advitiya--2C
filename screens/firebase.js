import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCd73BQsjrXCVH8cQqyvao7FZoeDJpZlLE",
  authDomain: "agrforecast.firebaseapp.com",
  projectId: "agrforecast",
  storageBucket: "agrforecast.appspot.com",
  messagingSenderId: "1086933290959",
  appId: "1:1086933290959:web:b86fa0710b1f605df44cba"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;

