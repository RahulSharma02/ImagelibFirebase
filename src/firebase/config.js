import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
// put your own web app's configuration from firebase.



  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFireStore = firebase.firestore();
  const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectFireStore,projectStorage,timeStamp};