import React from "react";
import firebase from "firebase/compat/app";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatMessage from "../ChatMessage/ChatMessage";
import SendMessage from "../SendMessage/SendMessage";
import SignOut from "../SignOut/SignOut";

const ChatRoom = () => {
  const firestore = firebase.firestore();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limitToLast(25);

  const [messages] = useCollectionData(query, { idField: "id" });

  return (
    <>
      {messages &&
        messages.map((message) => (
          <div>
            <ChatMessage key={message.id} message={message} />
          </div>
        ))}
        <SendMessage/>
        <SignOut/>
    </>
  );
};

export default ChatRoom;
