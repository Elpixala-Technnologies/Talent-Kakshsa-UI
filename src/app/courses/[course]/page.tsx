import { video, videoT } from "@/assets";
import { CourseDetailBanner } from "@/components/banners/CourseDetailBanner";
import Header from "@/components/header/Header";
import Wrapper from "@/components/Wrappers";
import { header } from "@/data/wrapperData";
import formatFees, { formatRupee } from "@/utils/customText";
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
        <div className="grid grid-cols-10">
          <div className="col-span-2 bg-blue-900 text-white"></div>
          <div className="col-span-2"></div>
          <div className="col-span-1"></div>
          <div className="col-span-1"></div>
        </div>
      </Wrapper>
    </>
  );
}
