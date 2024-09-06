"use client";
import React from "react";
import HomeBanner from "@/components/banners/HomeBanner";
import Wrapper from "@/components/Wrappers";
import CourseSlider from "@/components/cardsAndSliders/CourseSlider";
import BlogSlider1, {
  BlogSlider1Skeleton,
} from "@/components/cardsAndSliders/BlogSlider1";
import NewsSlider from "@/components/cardsAndSliders/NewsSlider";
import { TestimonialSlider } from "@/components/cardsAndSliders/TestimonialSlider";
import { keyFeatures, packages } from "@/data/wrapperData";
import { PackageContentCard } from "@/components/cardsAndSliders/PackageContentCard";
export default function HomePage() {
  return (
    <>
      <HomeBanner
        title="Creating a Better Future through Education"
        subtitle="Online E-Learning Courses"
        desc="Learn from industry experts and boost your skills with Talent Kaksha. \n Start your journey to success today!"
        totalStudents={2535}
        totalCourses={150}
        totalInstructor={20}
      />
      {/* Courses  */}
      <Wrapper bgColor="bg-blue-50" className="space-y-5 py-16">
        <h1 className="text-3xl font-bold text-blue-900">
          Discover Top Course
        </h1>
        <div className="sliderStyle relative">
          <CourseSlider />
        </div>
      </Wrapper>
      {/* What Makes Us Special  */}
      <Wrapper
        bgColor="tiny-square-gradient"
        className="relative space-y-5 py-16"
      >
        <h2 className="mb-5 text-center text-3xl font-bold text-blue-900">
          What Makes Us Special
        </h2>
        <p className="text-center font-semibold text-black">
          Empowering Learners with Expert-Led Courses, Practical Skills, and a
          Community of Professionals
        </p>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
          {keyFeatures?.map((item: any, i: number) => (
            <KeyFeaturesCard
              key={i}
              title={item?.title}
              description={item?.description}
            />
          ))}
        </div>
      </Wrapper>
      {/* Featured Posts  */}
      <Wrapper bgColor="bg-orange-50" className="space-y-5 py-16">
        <h2 className="mb-5 text-3xl font-bold text-blue-900">
          Our Featured Posts
        </h2>
        <div className="sliderStyle relative">
          {true && true ? (
            <BlogSlider1 />
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[...Array(4)]?.map((i: any) => <BlogSlider1Skeleton key={i} />)}
            </div>
          )}
        </div>
      </Wrapper>
      {/* Recent News  */}
      <Wrapper bgColor="bg-blue-50" className="space-y-5 py-16">
        <h2 className="mb-5 text-3xl font-bold text-blue-900">
          Our Recent News
        </h2>
        <div className="sliderStyle relative">
          {true && true ? (
            <NewsSlider />
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[...Array(4)]?.map((i: any) => <BlogSlider1Skeleton key={i} />)}
            </div>
          )}
        </div>
      </Wrapper>
      {/* Testimonials  */}
      <Wrapper bgColor="bg-orange-50" className="relative space-y-5 py-16">
        <h2 className="mb-5 text-center text-3xl font-bold text-blue-900">
          What Students Say About Us
        </h2>
        <div className="sliderStyle relative">
          <TestimonialSlider />
        </div>
        <div className="dotted-gradient mx-auto !-mt-60 h-64 w-full rounded-2xl"></div>
      </Wrapper>
      {/* Packages  */}
      <Wrapper bgColor="bg-blue-50" className="relative space-y-5 py-16">
        <h2 className="mb-5 text-center text-3xl font-bold text-blue-900">
          Our Packages
        </h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {packages?.map((item: any, i: number) => (
            <PackageContentCard
              key={i}
              packageName={item?.packageName}
              price={item?.price}
              isPopular={item?.isPopular}
              text={item?.text}
              lists={item?.lists}
            />
          ))}
        </div>
      </Wrapper>
    </>
  );
}

function KeyFeaturesCard({ title, description }: any) {
  return (
    <div className="tiny-square-gradient1 rounded-xl border-2 border-blue-900 p-3 text-center transition-all duration-300 hover:scale-105">
      <h6 className="text-lg font-bold text-blue-900">{title}</h6>
      <p>{description}</p>
    </div>
  );
}
