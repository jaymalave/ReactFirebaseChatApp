import React, { useState } from "react";
import firebase from "firebase/compat/app";

const SendMessage = () => {
  const [formValue, setFormValue] = useState("");
  const auth = firebase.auth();
  const firestore = firebase.firestore();
  const messagesRef = firestore.collection("messages");
  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoUrl } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoUrl,
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
