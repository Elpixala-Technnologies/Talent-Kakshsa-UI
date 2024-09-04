import React from "react";
// import NewsFeed from "./NewsFeed";
// import ChatBox from "./ChatBox";
// import Community from "./Community";
// import MyProfile from "./MyProfile";

const TabContent = ({ activeTab }: any) => {
  return (
    <div>
      Render components based on activeTab
      {/* {activeTab?.label === "feeds" && <NewsFeed />}

      {activeTab?.label === "messages" && <ChatBox />}
      {activeTab?.label === "community" && <Community />}
      {activeTab?.label === "my-profile" && <MyProfile />} */}
    </div>
  );
};

export default TabContent;
