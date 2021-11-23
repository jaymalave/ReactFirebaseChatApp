import React from "react";
import firebase from "firebase/compat/app";

const ChatMessage = (props) => {
  const auth = firebase.auth();
  //destructuring
  const { text, uid, photourl, username } = props.message;
  const isSentOrGot = uid === auth.currentUser.uid ? "sent" : "recieved";

  return (
    <div className="m-2">
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        {/* <div className="flex-shrink-0">
          <img className="h-12 w-12 rounded-full" src={photourl} alt="Profile Picture" />
        </div> */}
        <div>
          <div className="text-xl font-medium text-black">{username}</div>
          <hr className="w-80"/>
          <p className="text-gray-500">{text}</p>
        </div>
      </div>
    </div>
  );
};
export default ChatMessage;
