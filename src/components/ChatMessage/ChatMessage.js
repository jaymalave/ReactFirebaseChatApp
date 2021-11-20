import React from "react";
import firebase from "firebase/compat/app";

const ChatMessage = (props) => {
  const auth = firebase.auth();
  //destructuring
  const { text, uid, photoUrl } = props.message;
  const isSentOrGot = uid === auth.currentUser.uid ? "sent" : "recieved";

  return (
    <>
      <div className={`message ${isSentOrGot}`}>
        <img src={photoUrl} />
        <p>{text}</p>
      </div>
    </>
  );
};
export default ChatMessage;
