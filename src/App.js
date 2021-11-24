import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { onAuthStateChanged } from "firebase/compat/auth";
import env from "react-dotenv";
import SignIn from "./components/SignIn/SignIn";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import SignOut from "./components/SignOut/SignOut";
import ChatRoom from "./components/ChatRoom/ChatRoom";
import {firebaseconfig} from './firebase.config.js' 


firebase.initializeApp(firebaseconfig);

const firestore = firebase.firestore();
const auth = firebase.auth();

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App d-flex flex-col align-items-center justify-content-center">
      <h1 className="d-flex justify-center fw-bold text-5xl align-items-center m-1 text-center my-5">
        Stack underflow, seriously.
      </h1>
      {user ? (
        <>
          <ChatRoom />
        </>
      ) : (
        <SignIn />
      )}
    </div>
  );
}

export default App;
