// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGzvD3GW2paXoA8EHXXIZrtqM60ihwsHg",
  authDomain: "efruitsmanager.firebaseapp.com",
  projectId: "efruitsmanager",
  storageBucket: "efruitsmanager.appspot.com",
  messagingSenderId: "794775306254",
  appId: "1:794775306254:web:f91b939b8ee07dcf0cbc5f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;