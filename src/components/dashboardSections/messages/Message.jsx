import { useState } from "react";
// import { useAuthContext } from "../../context/AuthContext";
import { useAppDispatch, useAppSelector } from "@/Redux";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";
import Image from "next/image";

const Message = ({ message }) => {
  // const { authUser } = useAuthContext();
  const { authUser } = useAppSelector((state) => state.auth);
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-green-700" : "";

  const shakeClass = message.shouldShake ? "shake" : "";
  const [likesNo, setLikesNo] = useState(0);

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <Image alt="chat bubble" src={profilePic} />
        </div>
      </div>
      <div
        className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} group relative pb-2`}
      >
        {message.message}
        <button
          className={`like ${likesNo > 0 ? "" : "hidden"} indicator absolute ${
            chatClassName === "chat-start"
              ? "left-[90%] top-1/2"
              : "right-[90%] top-1/2"
          } h-9 w-9 rounded-full bg-green-600 ${
            chatClassName === "chat-start" ? "group-hover:flex" : ""
          } pl-2 pt-1`}
          onClick={() => setLikesNo((pre) => pre + 1)}
        >
          👍
          <span className="badge badge-sm indicator-item border-none bg-red-700">
            {likesNo}
          </span>
        </button>
      </div>
      <div className="chat-footer flex items-center gap-1 text-xs opacity-50">
        {formattedTime}
      </div>
    </div>
  );
};
export default Message;
