// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqZFxuALHvlJX8ZkZsnoSWTzuhgewrQ6I",
  authDomain: "dragonnews-6f1ef.firebaseapp.com",
  projectId: "dragonnews-6f1ef",
  storageBucket: "dragonnews-6f1ef.firebasestorage.app",
  messagingSenderId: "117338218060",
  appId: "1:117338218060:web:df3328bb43c2fcad971ee9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth