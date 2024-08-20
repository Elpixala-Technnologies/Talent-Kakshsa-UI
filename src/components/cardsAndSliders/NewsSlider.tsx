"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { Button } from "../Button";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { addCommas, convertToYearlyFee } from "@/utils/customText";
import { useQuery } from "@apollo/client";
import NewsCard from "./NewsCard";
import { news1 } from "@/assets";
// import { getAllColleges } from "@/graphql/collegeQuery/colleges";
// import { getAllTopColleges } from "@/graphql/collegeQuery/topColleges";

export default function NewsSlider() {
  const uniqueId = "news123";
  // Query
  //   const {
  //     data: topCollegeData,
  //     loading,
  //     error,
  //     refetch,
  //   } = useQuery(getAllTopColleges, {
  //     variables: {
  //       page: 1,
  //       pageSize: 10,
  //     },
  //   });
  // =========================================== //
  //   useEffect(() => {
  //     if (!loading && !topCollegeData) {
  //       refetch();
  //     }
  //   }, [topCollegeData, refetch, loading]);
  // =========================================== //

  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      clickable: true,
      // dynamicBullets: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    loop: true,
    navigation: {
      nextEl: `.${uniqueId}-next`,
      prevEl: `.${uniqueId}-prev`,
    },
    modules: [Autoplay, Pagination, Navigation],
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1260: {
        slidesPerView: 4,
      },
    },
  };

  return (
    <>
      {/* {topCollegeData?.colleges?.data && ( */}
      <Swiper
        {...swiperOptions}
        className={`mySwiper w-full max-w-fit px-5 ${uniqueId}`}
      >
        {[1, 2, 3, 4, 5, 6]?.map((college: any, index: number) => {
          const slide = (
            <SwiperSlide
              key={index}
              className="mb-12 w-full overflow-hidden rounded-2xl border border-zinc-300 bg-white shadow-lg"
            >
              {" "}
              <Card
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
            </SwiperSlide>
          );
          return <>{slide}</>;
        })}
      </Swiper>
      {/*  )} */}
      {/* Add navigation buttons */}
      {/* {topCollegeData?.colleges?.data && ( */}
      <div className={`${uniqueId}-next swiper-button-next !top-[34%]`}></div>
      {/*  )} */}
      {/* {topCollegeData?.colleges?.data && ( */}
      <div className={`${uniqueId}-prev swiper-button-prev !top-[34%]`}></div>
      {/*  )} */}
    </>
  );
}

function Card({
  bgImage,
  title,
  tags,
  author,
  lastUpdated,
  description,
  slug,
}: any) {
  return (
    <div className="col-span-1 w-full space-y-3 rounded-lg bg-white p-5 shadow-lg">
      <Image
        src={bgImage}
        alt="news Bg"
        width={400}
        height={400}
        className="mb-3 h-44 w-full rounded-lg object-cover"
      />
      <Link href={`/news/${slug} || #`}>
        <h2 className="line-clamp-2 cursor-pointer text-lg font-bold hover:text-blue-900">
          {title}
        </h2>
      </Link>
      <div className="flex flex-wrap gap-2">
        {tags?.map((tag: any, index: number) => (
          <span
            key={index}
            className="rounded-full bg-blue-200 px-2 py-1 text-sm text-blue-800"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-end gap-4">
        <p className="font-bold">{author}</p>
        <p className="text-sm text-zinc-400">{lastUpdated}</p>
      </div>
      <p className="line-clamp-4 text-justify text-zinc-500">{description}</p>
      <Link
        href={`/news/${slug} || #`}
        className="text-blue-900 hover:underline"
      >
        Read More
      </Link>
    </div>
  );
}
