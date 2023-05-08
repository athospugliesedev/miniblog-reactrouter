import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firebase'

const firebaseConfig = {
  apiKey: "",
  authDomain: "miniblog-b6415.firebaseapp.com",
  projectId: "miniblog-b6415",
  storageBucket: "miniblog-b6415.appspot.com",
  messagingSenderId: "798980815160",
  appId: ""
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db };