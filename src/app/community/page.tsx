"use client";
import DiscussionAside from "@/components/AsideSections/DiscussionAside";
import Tab from "@/components/dashboardSections/Tab";
import TabContent from "@/components/dashboardSections/TabContent";
import Wrapper from "@/components/Wrappers";
import useUserData from "@/customHook/useProfile";
import { community } from "@/data/community";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";

function Community() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");

  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeTab, setActiveTab] = useState(tab || "news-feed");

  const { data: userProfileData, loading, error, refetch } = useUserData();
  // ================================================================ //
  useEffect(() => {
    if (!loading && !userProfileData) {
      refetch();
    }
  }, [userProfileData, refetch, loading]);
  useEffect(() => {
    if (
      tab &&
      tab !== activeTab &&
      community.tabs.some((t) => t.label === tab)
    ) {
      setActiveTab(tab);
    }
  }, [tab, activeTab]);
  // ================================================================ //
  const handleTabClick = (tabLabel: string) => {
    const selectedTab = community.tabs.find((t) => t.label === tabLabel);
    if (selectedTab) {
      setActiveTab(tabLabel);
      router.push(
        `?tab=${encodeURIComponent(tabLabel?.split(" ").join("-")?.toLocaleLowerCase())}`,
      );
    }
  };
  // ================================================================ //
  return (
    <Wrapper
      as="main"
      containerClassName="!bg-blue-50"
      className="relative grid grid-cols-12 gap-1 pt-14 md:gap-4"
    >
      <aside className="col-span-2 space-y-5 md:col-span-3">
        {/* Tabs */}
        <ul className="flex flex-col justify-between rounded-2xl bg-white p-5 px-3 text-lg shadow-md">
          <Tab
            tabs={community?.tabs}
            activeTab={activeTab}
            setActiveTab={handleTabClick}
          />
        </ul>
      </aside>
      <section className="col-span-10 space-y-5 lg:col-span-6">
        <TabContent
          activeTab={community?.tabs?.find((tab) => tab?.label === activeTab)}
          mobileMenu={mobileMenu}
          setMobileMenu={setMobileMenu}
        />
      </section>
      <DiscussionAside />
    </Wrapper>
  );
}

export default function CommunityPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Community />
    </Suspense>
  );
}
