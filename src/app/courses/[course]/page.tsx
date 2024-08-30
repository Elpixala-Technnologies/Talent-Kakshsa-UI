"use client";
import { video, videoT } from "@/assets";
import BlogDetailPageBanner2 from "@/components/banners/BlogDetailPageBanner2";
import { CourseDetailBanner } from "@/components/banners/CourseDetailBanner";
import PriceAndMaterialIncluded, {
  PopularCourses,
} from "@/components/detailPageSections/Aside";
import Content from "@/components/detailPageSections/Content";
import Header from "@/components/header/Header";
import Wrapper from "@/components/Wrappers";
import { header } from "@/data/wrapperData";
import { formatRupee } from "@/utils/customText";
import React from "react";

export default function page() {
  return (
    <>
      <Header header={header} />
      <Wrapper bgColor="bg-blue-50" containerClassName="mt-14 py-10">
        <CourseDetailBanner
          tag={"Web Development"}
          title={"Graphic Design Masterclass - Learn GREAT Design"}
          desc={
            "The Ultimate Graphics Design Course Which Covers Photoshop, Illustrator, InDesign, Design Theory, Branding & Logo Design"
          }
          isBestSeller={true}
          reviews={44}
          rating={4.5}
          authorName={"Pankaj Kumar"}
          lastUpdated={"08 May 2024"}
          fees={5000}
          discountFeesBy={20}
          demoVideo={video}
          videoThumbnail={videoT}
        />
        <BlogDetailPageBanner2
          text={
            "Access this top-rated course, plus 11,000+ more top-rated courses, with a Talent Kaksha’s plan."
          }
          priceLink={"#"}
          reviews={formatRupee(43335454)}
          rating={4.5}
          students={formatRupee(124356)}
        />
        <main className="grid grid-cols-12">
          <article className="col-span-9">
            <Content />
          </article>
          <aside className="col-span-3 space-y-5">
            <PriceAndMaterialIncluded />
            <PopularCourses />
          </aside>
        </main>
      </Wrapper>
    </>
  );
}
