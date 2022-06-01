import { initializeApp } from "firebase/app"

import {getFirestore} from "firebase/firestore"

import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDEnjS517oUsGCzTMG4Higs4TumsdCFcoc",
  authDomain: "oleo-1508.firebaseapp.com",
  projectId: "oleo-1508",
  storageBucket: "oleo-1508.appspot.com",
  messagingSenderId: "380997415332",
  appId: "1:380997415332:web:e56c51d21f02d320c79131"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

export const db=getFirestore(app)