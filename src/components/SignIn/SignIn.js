import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase/compat/app";

const SignIn = () => {
  const auth = firebase.auth();

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <div className="flex justify-center my-10">
      <button
        onClick={signInWithGoogle}
        className="bg-signInColor hover:bg-signInColor text-white font-bold py-1 px-2 my-5"
      >
        <div className="flex justify-between items-center m-2">
          <img src="/google.png" className="w-5 h-5 m-1"/>
          Sign in With Google
        </div>
      </button>
    </div>
  );
};

export default SignIn;
