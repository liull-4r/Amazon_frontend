
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCMZ4LLcAb5fU0--YHYUqBboNVxwPyWvUM",
  authDomain: "clone-b00eb.firebaseapp.com",
  projectId: "clone-b00eb",
  storageBucket: "clone-b00eb.appspot.com",
  messagingSenderId: "430548297908",
  appId: "1:430548297908:web:98afd4c8612eee86318fe1",
  measurementId: "G-R4HS9ZZVSR",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore()
export{auth,db}

