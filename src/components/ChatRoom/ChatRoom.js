import React, { useRef, useEffect } from "react";
import firebase from "firebase/compat/app";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatMessage from "../ChatMessage/ChatMessage";
import SendMessage from "../SendMessage/SendMessage";
import SignOut from "../SignOut/SignOut";
import './ChatRoom.css'


const ChatRoom = () => {
  const auth = firebase.auth();
  const dummy = useRef();
  const firestore = firebase.firestore();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limitToLast(25);

  const [messages] = useCollectionData(query, { idField: "id" });

  useEffect(() => {
    dummy.current.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <div className="">
    <div className="chat-container bg-wallColor bg-opacity-20">
      {messages &&
        messages.map((message) => (
          <div className={message.uid === auth.currentUser.uid ? "message-container sent" : "message-container recieved"}>
            <ChatMessage key={message.id} message={message} />
          </div>
        ))}
      <span ref={dummy}></span>
      
    </div>
    <SendMessage />
      <SignOut />
      </div>
  );
};

export default ChatRoom;
