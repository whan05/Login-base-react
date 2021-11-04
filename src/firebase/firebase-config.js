import 'firebase/firestore';
import 'firebase/auth';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBM8Cj6NuUGaT07pP1qf8VprZOkj0K8Hvo",
    authDomain: "react-app-login-44889.firebaseapp.com",
    projectId: "react-app-login-44889",
    storageBucket: "react-app-login-44889.appspot.com",
    messagingSenderId: "203326526487",
    appId: "1:203326526487:web:62313bec32570ce80df852"
  };
  

  const app = initializeApp(firebaseConfig);

  const db = getFirestore()

  const googleAuthProvider = new GoogleAuthProvider();

export{
    db,
    googleAuthProvider,
    app
}