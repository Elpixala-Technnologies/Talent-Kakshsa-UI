"use client";
import React, { useState } from "react";
import { Button } from "@/components/Button";
import JobKeywordTypeHead from "@/components/jobPortalSections/SeachBar/JobKeywordTypeHead";
import LocationTypeHead from "@/components/jobPortalSections/SeachBar/LocationTypeHead";
import Wrapper from "@/components/Wrappers";
import { IoIosSearch } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { TbFilterCheck } from "react-icons/tb";
import JobPostCard from "@/components/cardsAndSliders/JobPostCard";
import { jobPost } from "@/data/job-portal";

export default function JobPortalFilterPage() {
  const [filters, setFilters] = useState({
    jobProfile: [],
    location: [],
    isPartTime: false,
    isRemote: false,
    isFullTime: false,
    salaryRange: 0,
    experienceYear: 0,
  });
  console.log(filters);
  const handleSalaryRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), 10); // Cap the value at 10
    setFilters((prevFilters: any) => ({
      ...prevFilters,
      salaryRange: value,
    }));
  };
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
  };
  const handleExperienceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters((prevFilters: any) => ({
      ...prevFilters,
      experienceYear: Number(e.target.value),
    }));
  };
  return (
    <>
      <Wrapper
        bgColor="bg-blue-50"
        containerClassName="pt-24"
        className="grid grid-cols-12 gap-5"
      >
        <div className="max-md:hidden md:col-span-4"></div>
        <div className="col-span-12 text-center md:col-span-8">
          <h2 className="text-xl font-semibold">1234 Jobs</h2>
          <p className="text-lg">
            Search and Apply to Latest Job Vacancies & Openings in India
          </p>
        </div>
      </Wrapper>
      <Wrapper
        bgColor="bg-blue-50"
        containerClassName="py-16"
        className="grid grid-cols-12 gap-5"
      >
        <aside className="rounded-lg bg-white p-3 md:col-span-4">
          <h2 className="mx-auto mb-5 flex w-max items-center gap-2 text-xl font-bold">
            <TbFilterCheck className="text-orange-500" /> Filter
          </h2>
          <div className="mb-5">
            <p className="mb-3 ml-1">Profile</p>
            <div className="flex flex-wrap gap-2 rounded-xl border border-zinc-400 p-1.5">
              <JobKeywordTypeHead setInputs={setFilters} />
            </div>
          </div>
          <div className="mb-5">
            <p className="mb-3 ml-1">Location</p>
            <div className="flex flex-wrap gap-2 rounded-xl border border-zinc-400 p-1.5">
              <LocationTypeHead setInputs={setFilters} />
            </div>
          </div>
          <div>
            {/* Checkboxes for job types */}
            <div className="mb-5 flex flex-col gap-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="isPartTime"
                  checked={filters.isPartTime}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                Part-Time
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="isRemote"
                  checked={filters.isRemote}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                Include work from home also
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="isFullTime"
                  checked={filters.isFullTime}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                Full-Time
              </label>
            </div>
          </div>
          {/* Annual salary  */}
          <div className="mb-5">
            <p className="mb-3 ml-1">Annual salary (in lakhs)</p>
            <input
              type="range"
              min="0"
              max="12"
              step={1}
              value={filters.salaryRange}
              onChange={handleSalaryRangeChange}
              className="h-1 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 outline-none"
              style={{
                cursor: "pointer",
                background: `linear-gradient(to right, rgb(229 231 235 ) ${
                  (filters.salaryRange / 12) * 100
                }%, rgb(249, 115, 22) ${(filters.salaryRange / 12) * 100}%)`,
              }}
            />
            <div className="flex justify-between pr-[0.8rem]">
              {[0, 2, 4, 6, 8, 10].map((item, index) => (
                <span key={index}>{item}</span>
              ))}
              <span> </span>
            </div>
          </div>
          {/* Years of Experience  */}
          <div className="mb-5">
            <p className="mb-3 ml-1">Years of Experience</p>
            <select
              value={filters.experienceYear}
              onChange={handleExperienceChange}
              className="w-full rounded-lg border border-zinc-400 p-2"
            >
              <option value={0}>Fresher</option>
              <option value={1}>1 year</option>
              <option value={2}>2 years</option>
              <option value={3}>3 years</option>
              <option value={4}>4 years</option>
              <option value={5}>5 years</option>
              <option value={6}>&gt;5 years</option>
            </select>
          </div>
          <Button variant="orange" className="!w-full">
            Apply Filters
          </Button>
        </aside>
        <div className="col-span-12 text-center md:col-span-8">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <JobPostCard
              key={index}
              id={jobPost.id}
              isActivelyHiring={jobPost?.isFeatured}
              title={jobPost?.title}
              companyName={jobPost?.company?.name}
              isPartTime={jobPost?.isPartTime}
              isFullTime={jobPost?.isFullTime}
              isRemote={jobPost?.isRemote}
              startDate={jobPost?.startDate}
              minSalary={jobPost?.salaryRange?.min}
              maxSalary={jobPost?.salaryRange?.max}
              jobPostDate={jobPost?.jobPostDate}
              location={jobPost?.location?.city}
              noOfOpening={jobPost?.noOfOpening}
              minExperience={jobPost?.experienceRequired?.min}
              maxExperience={jobPost?.experienceRequired?.max}
            />
          ))}
        </div>
      </Wrapper>
    </>
  );
}
