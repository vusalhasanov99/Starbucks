import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAbJBp4oR-MKPcDvysWJNdPKPt1kr-NVis",
  authDomain: "starbucksaz-21e66.firebaseapp.com",
  projectId: "starbucksaz-21e66",
  storageBucket: "starbucksaz-21e66.appspot.com",
  messagingSenderId: "729851071066",
  appId: "1:729851071066:web:624f0ccfaca133589ba663",
  measurementId: "G-LL7ZC67RR1"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();
export const db=getFirestore(app);