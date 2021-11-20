import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase/compat/app";

const SignIn = () => {

 const auth = firebase.auth();
  

 const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
  }

    return (
        <>
        <button onClick={signInWithGoogle}>Sign in With Google</button>
        </>
    )
}

export default SignIn;