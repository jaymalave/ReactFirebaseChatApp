import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import env from "react-dotenv";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "chatapp-b7f91.firebaseapp.com",
  projectId: "chatapp-b7f91",
  storageBucket: "chatapp-b7f91.appspot.com",
  messagingSenderId: "66615626930",
  appId: "1:66615626930:web:226cc1225eb6e5ccdc0dab",
  measurementId: "G-4BVK1YMPFW"
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {

  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <h1 className="text-center fw-bold">React firebase chat app</h1>
    </div>
  );
}

export default App;
