import React from "react";
import NewsFeed from "./NewsFeed";
import Messages from "./Messages";
import YourReviews from "./YourReviews";
import CodeSnippets from "./CodeSnippets";
import Videos from "./Videos";
import Friends from "./Friends";
import Community from "./Community";
import MyProfile from "./MyProfile";
import Settings from "./Settings";

const TabContent = ({ activeTab, setMobileMenu, mobileMenu }: any) => {
  return (
    <>
      {/* Render components based on activeTab */}
      {activeTab?.label === "News Feed" && (
        <NewsFeed
          tab={activeTab}
          mobileMenu={mobileMenu}
          setMobileMenu={setMobileMenu}
        />
      )}

      {activeTab?.label === "Messages" && (
        <Messages
          tab={activeTab}
          mobileMenu={mobileMenu}
          setMobileMenu={setMobileMenu}
        />
      )}
      {activeTab?.label === "Your Reviews" && (
        <YourReviews
          tab={activeTab}
          mobileMenu={mobileMenu}
          setMobileMenu={setMobileMenu}
        />
      )}
      {activeTab?.label === "Code Snippets" && (
        <CodeSnippets
          tab={activeTab}
          mobileMenu={mobileMenu}
          setMobileMenu={setMobileMenu}
        />
      )}
      {activeTab?.label === "Videos" && (
        <Videos
          tab={activeTab}
          mobileMenu={mobileMenu}
          setMobileMenu={setMobileMenu}
        />
      )}
      {activeTab?.label === "Friends" && (
        <Friends
          tab={activeTab}
          mobileMenu={mobileMenu}
          setMobileMenu={setMobileMenu}
        />
      )}
      {activeTab?.label === "Community" && (
        <Community
          tab={activeTab}
          mobileMenu={mobileMenu}
          setMobileMenu={setMobileMenu}
        />
      )}
      {activeTab?.label === "My Profile" && (
        <MyProfile
          tab={activeTab}
          mobileMenu={mobileMenu}
          setMobileMenu={setMobileMenu}
        />
      )}
      {activeTab?.label === "Settings" && (
        <Settings
          tab={activeTab}
          mobileMenu={mobileMenu}
          setMobileMenu={setMobileMenu}
        />
      )}
    </>
  );
};

export default TabContent;
