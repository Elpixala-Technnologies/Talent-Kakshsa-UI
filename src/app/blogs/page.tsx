"use client";
import { news1, user1 } from "@/assets";
import Banner1 from "@/components/banners/Banner1";
import NewsBanner from "@/components/banners/NewsBanner";
import { Button } from "@/components/Button";
import BlogSlider from "@/components/cardsAndSliders/BlogSlider";
import BlogSlider1, { Card } from "@/components/cardsAndSliders/BlogSlider1";
import EventCard from "@/components/cardsAndSliders/EventCard";
import NewsCard from "@/components/cardsAndSliders/NewsCard";
import NewsSlider from "@/components/cardsAndSliders/NewsSlider";
import Faqs from "@/components/Faqs";
import NewsAside from "@/components/newsPageSections/NewsAside";
import Wrapper from "@/components/Wrappers";
import { formatDate, formatTime } from "@/utils/customText";
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
      <NewsBanner title="Our Blog" subtitle="Search. Explore. Learn" />
      <Wrapper bgColor="bg-blue-50 py-10">
        {/* Categories  */}
        <div className="space-y-3">
          <h2 className="mb-5 text-2xl font-bold text-blue-900">Categories</h2>
          <div className="sliderStyle relative">
            <BlogSlider />
          </div>
        </div>
        {/* Featured Posts  */}
        <div className="space-y-3">
          <h2 className="mb-5 text-2xl font-bold text-blue-900">
            Featured Posts
          </h2>
          <div className="sliderStyle relative">
            <BlogSlider1 />
          </div>
        </div>
        {/* Latest Posts  */}
        <div className="my-10 space-y-3">
          <h2 className="text-2xl font-bold text-blue-900">Latest Posts</h2>
          {[1, 2, 3, 4]?.map((item: any, index: number) => (
            <BlogListingCard
              key={index}
              bgImage={news1}
              title={
                "GATE 2025 exam date announced; IIT Roorkee to hold exam from February 1 to 16"
              }
              category={"Web development"}
              author={"Pankaj Kumar"}
              lastUpdated={"Nov 12, 2022"}
              description={
                "When it comes to finding the right study abroad destination that caters to all your interests and requirements When it comes to finding the right study abroad destination that caters to all your interests and requirements"
              }
              slug={"#"}
            />
          ))}
        </div>
        {/* Popular Posts  */}
        <div className="my-10 space-y-3">
          <h2 className="text-2xl font-bold text-blue-900">Popular Posts</h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6]?.map((college: any, index: number) => (
              <div className="col-span-1" key={index}>
                <Card
                  bgImage={news1}
                  title={
                    "15+ Scholarships for Indian Students to Study in the UK"
                  }
                  category={"web development"}
                  author={"Pankaj Kumar"}
                  lastUpdated={"Nov 12, 2022"}
                  description={
                    "When it comes to finding the right study abroad destination that caters to all your interests and requirements When it comes to finding the right study abroad destination that caters to all your interests and requirements"
                  }
                  slug={"#"}
                  lineClamp={2}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Upcoming Events  */}
        <div className="space-y-3">
          <h2 className="mb-5 text-2xl font-bold text-blue-900">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[1, 2, 3, 4, 5, 6]?.map((college: any, index: number) => (
              <EventCard
                key={index}
                title={"Effects of Internet on focus : Design for mindfulness"}
                hostName={"Pankaj Kumar"}
                usersAvatars={[
                  user1,
                  user1,
                  user1,
                  user1,
                  user1,
                  user1,
                  user1,
                  user1,
                ]}
                date={formatDate("2024-08-19T19:15:00.000Z")}
                timeFrom={formatTime("2024-08-19T19:15:00.000Z")}
                timeTo={formatTime("2024-08-19T19:15:00.000Z")}
                eventMedium="Google Meet"
              />
            ))}
          </div>
        </div>
      </Wrapper>
      <Banner1 />
    </>
  );
}

function BlogListingCard({
  bgImage,
  category,
  author,
  title,
  lastUpdated,
  slug,
}: any) {
  return (
    <div className="my-3 flex cursor-pointer gap-5 rounded-lg bg-white p-2 max-md:flex-col">
      <Image
        src={bgImage}
        alt="logo"
        width={500}
        height={500}
        className="h-32 w-80 rounded-lg object-cover"
      />
      <div className="w-full space-y-2">
        <p className="text-sm text-blue-600">{category}</p>
        <div className="flex w-full justify-between gap-5 max-md:flex-col">
          <Link href={`/blogs/${slug} || #`}>
            <h3 className="cursor-pointer font-bold text-black hover:text-blue-900">
              {title}
            </h3>
          </Link>
        </div>
        <div className="flex items-end gap-4">
          <p className="font-bold text-orange-500">{author}</p>
          <p className="text-sm text-zinc-400">{lastUpdated}</p>
        </div>
      </div>
    </div>
  );
}
