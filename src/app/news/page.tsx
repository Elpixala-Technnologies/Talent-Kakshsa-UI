"use client";
import { news1 } from "@/assets";
import NewsBanner from "@/components/banners/NewsBanner";
import NewsCard from "@/components/cardsAndSliders/NewsCard";
import Wrapper from "@/components/Wrappers";
import React, { useState } from "react";

export default function NewsDetailPage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleSelect = (index: any) => {
    setSelectedIndex(index);
    // Update the URL with the selected tab
    // const selectedTab = data[index].navItem.toLowerCase();
  };

  return (
    <>
      <NewsBanner
        title="Everyday News Updates"
        subtitle="Search. Explore. Learn"
      />
      <Wrapper bgColor="bg-blue-50 my-10">
        <Navbar
          navItems={["latest news", "social media feed", "video news"]}
          onSelect={handleSelect}
          selectedIndex={selectedIndex}
        />
        <main className="grid grid-cols-12">
          <div className="col-span-9 grid grid-cols-1 sm:grid-cols-2">
            {[1, 2, 3, 4]?.map((item: any, index: number) => (
              <NewsCard
                key={index}
                bgImage={news1}
                title={
                  "15+ Scholarships for Indian Students to Study in the UK"
                }
                tags={["Web development", "Machine Learning ", "Coding"]}
                author={"Pankaj Kumar"}
                lastUpdated={"Nov 12, 2022"}
                description={
                  "When it comes to finding the right study abroad destination that caters to all your interests and requirements When it comes to finding the right study abroad destination that caters to all your interests and requirements"
                }
              />
            ))}
          </div>
          <aside className="col-span-3">
            {/* Recommended Posts  */}
            <div className="rounded-xl bg-white p-3 shadow-lg"></div>
          </aside>
        </main>
      </Wrapper>
    </>
  );
}

function Navbar({ navItems, onSelect, selectedIndex }: any) {
  return (
    <nav className="rounded-lg bg-blue-900">
      <ul className="no-scrollbar flex gap-x-8 overflow-x-auto px-5">
        {navItems.map((item: any, index: number) => (
          <>
            <li key={index}>
              <button
                className={`text-nowrap py-5 capitalize ${
                  selectedIndex === index
                    ? "text-orange-500 duration-100"
                    : "text-white duration-100"
                }`}
                onClick={() => onSelect(index)}
              >
                {item}
              </button>
            </li>
          </>
        ))}
      </ul>
    </nav>
  );
}
