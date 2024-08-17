"use client";
import { news1 } from "@/assets";
import NewsBanner from "@/components/banners/NewsBanner";
import NewsCard from "@/components/cardsAndSliders/NewsCard";
import Wrapper from "@/components/Wrappers";
import Image from "next/image";
import Link from "next/link";
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
        <main className="my-8 grid grid-cols-12 gap-5">
          <div className="col-span-12 grid grid-cols-1 gap-5 sm:grid-cols-2 md:col-span-9">
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
                slug={"#"}
              />
            ))}
          </div>
          <aside className="col-span-3 space-y-5 max-lg:hidden">
            {/* Recommended Posts */}
            <div className="rounded-xl bg-white p-3 font-semibold shadow-lg">
              <h4 className="border-b border-zinc-400 pb-2 text-lg">
                Recommended Posts
              </h4>
              {[1, 2, 3, 4]?.map((item: any, index: number) => (
                <NewsAsideCard
                  key={index}
                  bgImage={news1}
                  title={
                    "15+ Scholarships for Indian Students to Study in the UK"
                  }
                  lastUpdated={"Nov 12, 2022"}
                  slug
                />
              ))}
            </div>
            {/* Discover communities */}
            <div className="rounded-xl bg-white p-3 font-semibold shadow-lg">
              <h4 className="border-b border-zinc-400 pb-2 text-lg">
                Discover communities
              </h4>
              {[1, 2, 3, 4]?.map((item: any, index: number) => (
                <NewsAsideCard
                  key={index}
                  bgImage={news1}
                  title={
                    "15+ Scholarships for Indian Students to Study in the UK"
                  }
                  lastUpdated={"Nov 12, 2022"}
                  slug
                />
              ))}
            </div>
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
function NewsAsideCard({ bgImage, title, lastUpdated, slug }: any) {
  return (
    <div className="my-3 flex cursor-pointer items-center gap-x-2 rounded-lg p-2 hover:bg-gray-100">
      <Image
        src={bgImage}
        alt="logo"
        width={100}
        height={100}
        className="h-16 w-16 rounded-lg object-cover"
      />
      <div>
        <Link href={`/news/${slug} || #`} />
        <h3 className="line-clamp-2 cursor-pointer font-semibold text-zinc-700 hover:text-blue-900">
          {title}
        </h3>
        <p className="text-xs text-zinc-400">{lastUpdated}</p>
      </div>
    </div>
  );
}
