import React from "react";
import firebase from "firebase/compat/app";
import "./ChatMessage.js";

const ChatMessage = (props) => {
  const auth = firebase.auth();
  //destructuring
  const { text, uid, photourl, username, createdAt } = props.message;
  const isSentOrGot = uid === auth.currentUser.uid ? "sent" : "recieved";

  return (
    <div className={isSentOrGot ? "sent m-2" : "recieved m-2"}>
      <div className="p-6 max-w-mdmx-auto bg-white rounded-xl shadow-md flex items-start justify-start space-x-4">
        <div className="flex-shrink-0">
          <img className="h-6 w-6 rounded-full" src={photourl} alt="Profile Picture" />
        </div>
        <div>
          <div className="text-sm font-bold text-black">{username}</div>
          {/* <div className="text-md font-medium text-gray">{createdAt}</div> */}
          <p className="text-gray-500">{text}</p>
        </div>
      </div>
    </div>
  );
};
export default ChatMessage;
