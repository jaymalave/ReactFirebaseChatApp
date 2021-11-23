import React from "react";
import firebase from "firebase/compat/app";

const ChatMessage = (props) => {
  const auth = firebase.auth();
  //destructuring
  const { text, uid, photourl, username} = props.message;
  const isSentOrGot = uid === auth.currentUser.uid ? "sent" : "recieved";

  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-row">
        <img src={photourl} className="rounded-full w-10 h-10"/>
        <h1>{username}</h1>
        </div>
        <p>{text}</p>
      </div>
    </>
  );
};
export default ChatMessage;
