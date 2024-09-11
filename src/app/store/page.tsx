"use client";
import StoreBanner from "@/components/banners/StoreBanner";
import Dropdown from "@/components/Dropdown";
import Wrapper from "@/components/Wrappers";
import { useClickOutside } from "@/customHook/useClickOutside";
import Link from "next/link";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

export default function StorePage() {
  return (
    <>
      <Wrapper bgColor="bg-blue-50" containerClassName="mt-10 pt-10">
        <Navbar />
        <div className="swiperStyle2 relative">
          <StoreBanner />
        </div>
      </Wrapper>
      <Wrapper bgColor="bg-blue-50" containerClassName="py-10">
        <Heading t1="Grab the best deal on" t2="Electronics" />
      </Wrapper>
    </>
  );
}

function Navbar() {
  return (
    <div className="my-5 flex flex-wrap gap-3">
      <Dropdown
        title="All"
        href="/store/all"
        list={[...Array(0)]?.map((item, index) => {
          return {
            name: `name-${index}`,
            href: "#",
          };
        })}
      />
      <Dropdown
        title="Electronics"
        href="/store/electronics"
        list={[...Array(6)]?.map((item, index) => {
          return {
            name: `Electronics-${index}`,
            href: "#",
          };
        })}
      />
      <Dropdown
        title="Software"
        href="/store/software"
        list={[...Array(6)]?.map((item, index) => {
          return {
            name: `Software-${index}`,
            href: "#",
          };
        })}
      />
      <Dropdown
        title="Accessories"
        href="/store/accessories"
        list={[...Array(6)]?.map((item, index) => {
          return {
            name: `Accessories-${index}`,
            href: "#",
          };
        })}
      />
    </div>
  );
}

function Heading({ t1, t2 }: any) {
  return (
    <h2 className="flex w-fit flex-wrap gap-1 text-wrap border-b-4 border-orange-500 text-xl font-bold md:text-2xl">
      <span className="text-zinc-700">{t1}</span>
      <span className="text-blue-900">{t2}</span>
    </h2>
  );
}
