import CourseBanner from "@/components/banners/CourseBanner";
import CourseListSection from "@/components/coursesListingPageSections/CourseListSection";
import Header from "@/components/header/Header";
import Wrapper from "@/components/Wrappers";
import { header } from "@/data/wrapperData";
import React from "react";

export default function page() {
  return (
    <>
      <Header header={header} />
      <Wrapper bgColor="bg-blue-50" containerClassName="mt-14 py-10">
        <div className="swiperStyle1 relative">
          <CourseBanner />
        </div>
      </Wrapper>
      <CourseListSection
      // data={courses}
      // filterBy={coursePage?.filterBy}
      // tabsSections={tabsSections}
      />
    </>
  );
}
