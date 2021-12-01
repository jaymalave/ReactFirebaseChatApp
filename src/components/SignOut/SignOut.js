import React from "react";
import firebase from "firebase/compat/app";

const SignOut = () => {
  const auth = firebase.auth();

  return (
    auth.currentUser && (
      <div className="flex justify-center">
        <button
          onClick={() => auth.signOut()}
          className="bg-signOutColor hover:bg-signOutColor text-white font-bold py-1 px-2 my-2"
        >
          Sign Out
        </button>
      </div>
    )
  );
};

export default SignOut;
