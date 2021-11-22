import React, { useState } from "react";
import firebase from "firebase/compat/app";
import { onAuthStateChanged } from "firebase/compat/auth";

const SendMessage = () => {
  const [formValue, setFormValue] = useState("");
  const auth = firebase.auth();
  const firestore = firebase.firestore();
  const messagesRef = firestore.collection("messages");
  const sendMessage = async (e) => {
    e.preventDefault();

    //  const { uid, photoUrl, userName } = auth.currentUser;
    const uid = auth.currentUser.uid;
    const username = auth.currentUser.displayName;
    const photourl = auth.currentUser.photoURL;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photourl,
      username,
    });
    setFormValue("");
  };
  return (
    <>
      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Type your message"
        />

        <button type="submit" disabled={!formValue}>
          Send
        </button>
      </form>
    </>
  );
};

export default SendMessage;
