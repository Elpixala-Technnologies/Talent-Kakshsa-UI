import { useEffect } from "react";
import useConversation from "@/zustand/useConversation";
// import MessageInput from "./MessageInput";
// import Messages from "./Messages";
import BgSvg from "./bgSvg";
import { useAppSelector } from "@/Redux";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    // cleanup function (unmounts)
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="flex w-full flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="mb-2 border-b border-zinc-300 px-4 py-2">
            <span className="label-text">To:</span>{" "}
            <span className="font-bold text-zinc-600">
              {selectedConversation?.name}
            </span>
          </div>
          {/* <Messages />
          <MessageInput /> */}
        </>
      )}
    </div>
  );
};
export default MessageContainer;

const NoChatSelected = () => {
  const authUser = useAppSelector((state) => state.auth);
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex flex-col items-center gap-2 px-4 text-center font-semibold text-zinc-600 sm:text-lg md:text-xl">
        <BgSvg />
        <p>Welcome, {authUser?.userName}</p>
        <p className="text-sm">
          Make a Quality Discussion Here with Your Friends
        </p>
      </div>
    </div>
  );
};
