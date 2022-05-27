import firebase from "firebase/compat/app";

import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDAAAabz0zwCcDoQouKvyc8NWzOHtT-3dI",
    authDomain: "clone-fb-e355c.firebaseapp.com",
    projectId: "clone-fb-e355c",
    storageBucket: "clone-fb-e355c.appspot.com",
    messagingSenderId: "265071802239",
    appId: "1:265071802239:web:40b88cc53aeaca62448c4a"
  };


const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const storage = firebase.storage();


export { db, storage };