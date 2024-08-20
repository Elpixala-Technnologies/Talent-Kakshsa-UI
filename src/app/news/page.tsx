"use client";
import { news1 } from "@/assets";
import Banner1 from "@/components/banners/Banner1";
import NewsBanner from "@/components/banners/NewsBanner";
import { Button } from "@/components/Button";
import NewsCard, {
  NewsCardSkeleton,
} from "@/components/cardsAndSliders/NewsCard";
import NewsSlider from "@/components/cardsAndSliders/NewsSlider";
import Faqs from "@/components/Faqs";
import NewsAside from "@/components/newsPageSections/NewsAside";
import Wrapper from "@/components/Wrappers";
import { getAllNews, getAllNewsCategory } from "@/graphql/newsQuery/news";
import { formatDate } from "@/utils/customText";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function NewsDetailPage() {
  const [selectedFilter, setSelectedFilter] = useState("");
  // Query
  const {
    data: newsCategoryList,
    loading: newsCategoryListLoading,
    error: newsCategoryListError,
    refetch: newsCategoryListRefetch,
  } = useQuery(getAllNewsCategory);
  const {
    data: recentNewsByCategory,
    loading: recentNewsByCategoryLoading,
    error: recentNewsByCategoryError,
    refetch: recentNewsByCategoryRefetch,
  } = useQuery(getAllNews, {
    variables: {
      category: selectedFilter === "" ? undefined : selectedFilter,
      // page: 1,
      // pageSize: 10,
    },
  });

  useEffect(() => {
    console.log(recentNewsByCategory?.news?.data, "recentNewsByCategory");
  }, [recentNewsByCategory]);
  const handleSelect = (item: any) => {
    setSelectedFilter(item);
  };

  return (
    <>
      <NewsBanner
        title="Everyday News Updates"
        subtitle="Search. Explore. Learn"
      />
      <Wrapper bgColor="bg-blue-50 my-10">
        <Navbar
          navItems={
            newsCategoryList?.newsCategories?.data?.map(
              (item: any) => item?.attributes?.category,
            ) || []
          }
          onSelect={handleSelect}
          selectedFilter={selectedFilter}
        />
        <main className="my-8 grid grid-cols-12 gap-5">
          <div className="col-span-12 space-y-5 lg:col-span-9">
            {/* Recent News  */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {!recentNewsByCategoryLoading
                ? recentNewsByCategory?.news?.data?.map(
                    (item: any, index: number) => (
                      <NewsCard
                        key={index}
                        bgImage={
                          item?.attributes?.bgImage?.data?.attributes?.url
                        }
                        title={item?.attributes?.title}
                        tags={
                          item?.attributes?.tag?.data?.map(
                            (item: any) => item?.attributes?.tag,
                          ) || []
                        }
                        author={
                          item?.attributes?.author?.data?.attributes?.name
                        }
                        lastUpdated={formatDate(
                          item?.attributes?.author?.data?.attributes?.updatedAt,
                        )}
                        description={item?.attributes?.description}
                        slug={item?.attributes?.id}
                      />
                    ),
                  )
                : [0, 1]?.map((item: any, index: number) => (
                    <NewsCardSkeleton key={index} />
                  ))}
            </div>
            {/* Most Trending  */}
            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-blue-900">
                Most Trending
              </h2>
              {[1, 2, 3, 4]?.map((item: any, index: number) => (
                <NewsListingCard
                  key={index}
                  bgImage={news1}
                  title={
                    "GATE 2025 exam date announced; IIT Roorkee to hold exam from February 1 to 16"
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
          </div>
          {/* Aside Section  */}
          <NewsAside />
        </main>
        {/* Top Stories  */}
        <div className="space-y-3">
          <h2 className="mb-5 text-2xl font-bold text-blue-900">Top Stories</h2>
          <div className="sliderStyle relative">
            <NewsSlider />
          </div>
        </div>
        {/* Featured Articles  */}
        <div className="my-8 space-y-3">
          <h2 className="text-2xl font-bold text-blue-900">
            Featured Articles
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {[1, 2, 3, 4]?.map((item: any, index: number) => (
              <NewsListingCard1
                key={index}
                bgImage={news1}
                title={
                  "GATE 2025 exam date announced; IIT Roorkee to hold exam from February 1 to 16"
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
        </div>
        {/* FAQ's  */}
        <div className="my-8 space-y-3">
          <h2 className="mb-5 text-2xl font-bold text-blue-900">
            Frequently Asked Questions
          </h2>
          <Faqs data={faqs} />
        </div>
      </Wrapper>
      <Banner1 />
    </>
  );
}

function Navbar({ navItems, onSelect, selectedFilter }: any) {
  return (
    <nav className="rounded-lg bg-blue-900">
      <ul className="no-scrollbar flex gap-x-8 overflow-x-auto px-5">
        {navItems.map((item: any, index: number) => (
          <>
            <li key={index}>
              <button
                className={`text-nowrap py-5 capitalize ${
                  selectedFilter === item
                    ? "text-orange-500 duration-100"
                    : "text-white duration-100"
                }`}
                onClick={() => onSelect(item)}
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

function NewsListingCard({
  bgImage,
  tags,
  author,
  title,
  lastUpdated,
  slug,
}: any) {
  return (
    <div className="my-3 flex cursor-pointer items-center gap-5 rounded-lg bg-white p-2 max-md:flex-col">
      <Image
        src={bgImage}
        alt="logo"
        width={500}
        height={500}
        className="h-32 w-80 rounded-lg object-cover"
      />
      <div className="w-full space-y-2">
        <div className="flex flex-wrap gap-2">
          {tags?.map((tag: any, index: number) => (
            <span
              key={index}
              className="rounded-full bg-blue-900 px-4 py-1 text-sm text-white"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex w-full justify-between gap-5 max-md:flex-col">
          <Link href={`/news/${slug} || #`}>
            <h3 className="cursor-pointer font-bold text-black hover:text-blue-900 md:line-clamp-1">
              {title}
            </h3>
          </Link>
          <Link href={"/news/${slug} || #"}>
            <Button variant="orange" className="text-nowrap !px-2 !py-1">
              Read Full Story
            </Button>
          </Link>
        </div>
        <div className="flex items-end gap-4">
          <p className="font-bold text-zinc-500">{author}</p>
          <p className="text-sm text-zinc-400">{lastUpdated}</p>
        </div>
      </div>
    </div>
  );
}
function NewsListingCard1({
  bgImage,
  tags,
  author,
  title,
  lastUpdated,
  slug,
}: any) {
  return (
    <div className="my-3 flex cursor-pointer items-center gap-5 rounded-lg bg-white p-2 max-md:flex-col">
      <Image
        src={bgImage}
        alt="logo"
        width={500}
        height={500}
        className="h-36 w-80 rounded-lg object-cover"
      />
      <div className="w-full space-y-2">
        <div className="flex flex-wrap gap-2">
          {tags?.map((tag: any, index: number) => (
            <span
              key={index}
              className="rounded-full bg-blue-900 px-4 py-1 text-sm text-white"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link href={`/news/${slug} || #`} className="max-md:mt-3">
          <h3 className="cursor-pointer font-bold text-black hover:text-blue-900">
            {title}
          </h3>
        </Link>

        <div className="flex items-end gap-4">
          <p className="font-bold text-zinc-500">{author}</p>
          <p className="text-sm text-zinc-400">{lastUpdated}</p>
        </div>
        <Link href={"/news/${slug} || #"}>
          <Button variant="orange" className="text-nowrap !px-2 !py-1">
            Read Full Story
          </Button>
        </Link>
      </div>
    </div>
  );
}

const faqs = [
  {
    id: 1,
    question: "When was the University Established?",
    answer:
      "The Indian Institute of Technology, Madras was established in 1961. The institute was founded by the erstwhile Prime Minister, Shri. Venkatesh Iyengar.",
  },
  {
    id: 2,
    question: "Is the University a Private or Government University",
    answer:
      "The Indian Institute of Technology, Madras is a private university. The institute is governed by the Government of India. The institute has a status of Government.",
  },
  {
    id: 3,
    question: "What is the University Affiliation?",
    answer:
      "The Indian Institute of Technology, Madras is affiliated to the University of Madras. The institute is governed by the Government of India. The institute has a status of Government.",
  },
  {
    id: 4,
    question: "How good is the University",
    answer:
      "The Indian Institute of Technology, Madras is a private university. The institute is governed by the Government of India. The institute has a status of Government.",
  },
  {
    id: 5,
    question: "What courses does the University Offer?",
    answer:
      "The Indian Institute of Technology, Madras is a private university. The institute is governed by the Government of India. The institute has a status of Government.",
  },
];
