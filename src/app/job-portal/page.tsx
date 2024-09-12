import JobPortalBanner from "@/components/banners/JobPortalBanner";
import Wrapper from "@/components/Wrappers";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function page() {
  return (
    <>
      <JobPortalBanner />
      <Wrapper className="py-10">
        <Heading t1="Explore by" t2="category" href="#" />
      </Wrapper>
    </>
  );
}

function Heading({ t1 = "", t2 = "", href = "#" }: any) {
  return (
    <div className="flex items-center justify-between max-sm:flex-col">
      <h2 className="text-3xl font-bold">
        <span className="text-zinc-800">{t1}</span>{" "}
        <span className="text-orange-500">{t2}</span>
      </h2>
      <p className="flex-center cursor-pointer text-right text-blue-500 hover:underline">
        Show all jobs <FaArrowRightLong />
      </p>
    </div>
  );
}
