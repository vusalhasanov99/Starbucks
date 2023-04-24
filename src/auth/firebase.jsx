
import { getAuth, createUserWithEmailAndPassword  } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { useDispatch } from "react-redux";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbJBp4oR-MKPcDvysWJNdPKPt1kr-NVis",
  authDomain: "starbucksaz-21e66.firebaseapp.com",
  projectId: "starbucksaz-21e66",
  storageBucket: "starbucksaz-21e66.appspot.com",
  messagingSenderId: "729851071066",
  appId: "1:729851071066:web:624f0ccfaca133589ba663",
  measurementId: "G-LL7ZC67RR1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



const auth = getAuth();
export const register=(email, password) =>{
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    // ..
  });
}
