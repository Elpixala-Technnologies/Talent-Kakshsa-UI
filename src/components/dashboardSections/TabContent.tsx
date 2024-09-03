import React from "react";
import NewsFeed from "./NewsFeed";
import Messages from "./Messages";
import Community from "./Community";
import MyProfile from "./MyProfile";

const TabContent = ({ activeTab }: any) => {
  return (
    <>
      {/* Render components based on activeTab */}
      {activeTab?.label === "feeds" && <NewsFeed />}

      {activeTab?.label === "messages" && <Messages />}
      {activeTab?.label === "community" && <Community />}
      {activeTab?.label === "my-profile" && <MyProfile />}
    </>
  );
};

export default TabContent;
