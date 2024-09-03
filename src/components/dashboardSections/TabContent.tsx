import React from "react";
import NewsFeed from "./NewsFeed";
import Messages from "./Messages";
import Community from "./Community";
import MyProfile from "./MyProfile";

const TabContent = ({ activeTab, setMobileMenu, mobileMenu }: any) => {
  return (
    <>
      {/* Render components based on activeTab */}
      {activeTab?.label === "feeds" && (
        <NewsFeed
          tab={activeTab}
          mobileMenu={mobileMenu}
          setMobileMenu={setMobileMenu}
        />
      )}

      {activeTab?.label === "messages" && (
        <Messages
          tab={activeTab}
          mobileMenu={mobileMenu}
          setMobileMenu={setMobileMenu}
        />
      )}
      {activeTab?.label === "community" && (
        <Community
          tab={activeTab}
          mobileMenu={mobileMenu}
          setMobileMenu={setMobileMenu}
        />
      )}
      {activeTab?.label === "my-profile" && (
        <MyProfile
          tab={activeTab}
          mobileMenu={mobileMenu}
          setMobileMenu={setMobileMenu}
        />
      )}
    </>
  );
};

export default TabContent;
