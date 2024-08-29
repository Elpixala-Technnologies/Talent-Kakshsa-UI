import React from "react";
import { Button } from "../Button";
import Image from "next/image";
import formatFees, { formatRupee } from "@/utils/customText";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { TiPinOutline } from "react-icons/ti";

export default function CourseFilteredCard({
  slug,
  bgImage,
  courseTitle,
  tutor,
  fees,
  tag,
  reviews,
  handlePin,
  pinState,
}: any) {
  return (
    <div
      className={`relative w-full rounded-md bg-white duration-300 hover:shadow-[0px_0px_20px_2px_#ed8936]`}
    >
      <button
        className={`${pinState ? "shadow-[0px_0px_20px_2px_#ed8936]" : ""} absolute right-3 top-3 rounded-md border border-orange-500 bg-white p-1 text-xl text-orange-500 duration-300 hover:shadow-[0px_0px_20px_2px_#ed8936] active:shadow-[0px_0px_20px_2px_#ed8936]`}
        onClick={() => handlePin(!pinState)}
      >
        <TiPinOutline />
      </button>
      <div className="p-5">
        <Image
          src={bgImage}
          alt="logo"
          width={500}
          height={500}
          className="h-60 w-full rounded-md object-cover"
        />
      </div>
      <div className="space-y-3 p-5 pt-0">
        <div className="flex items-center justify-between gap-2">
          <p className="rounded-e-full rounded-s-full bg-zinc-300 px-4 py-1 font-semibold">
            {tag}
          </p>
          <p className="flex items-center text-zinc-400">
            <FaStar className="text-yellow-500" />({reviews} Review)
          </p>
        </div>
        <h2 className="poppins-bold text-lg">{courseTitle}</h2>
        <p>By {tutor}</p>
        <div className="flex items-center justify-between">
          <Button
            variant="orangeAnimated"
            className="poppins-bold flex items-center gap-2 text-nowrap"
          >
            Enroll Now <FaArrowRightLong />
          </Button>
          <p className="poppins-bold text-lg">₹ {formatRupee(fees)}</p>
        </div>
      </div>
    </div>
  );
}

export function CourseFilteredCardList({
  slug,
  bgImage,
  courseTitle,
  tutor,
  fees,
  tag,
  reviews,
  handlePin,
  pinState,
}: any) {
  return (
    <div
      className={`relative flex w-full rounded-md bg-white duration-300 hover:shadow-[0px_0px_20px_2px_#ed8936]`}
    >
      <button
        className={`${pinState ? "shadow-[0px_0px_20px_2px_#ed8936]" : ""} absolute left-3 top-3 rounded-md border border-orange-500 bg-white p-1 text-xl text-orange-500 duration-300 hover:shadow-[0px_0px_20px_2px_#ed8936] active:shadow-[0px_0px_20px_2px_#ed8936]`}
        onClick={() => handlePin(!pinState)}
      >
        <TiPinOutline />
      </button>
      <div className="p-5">
        <Image
          src={bgImage}
          alt="logo"
          width={500}
          height={500}
          className="h-32 w-60 rounded-md object-cover"
        />
      </div>
      <div className="flex w-full space-y-5 p-5 pl-0 max-md:flex-col md:justify-between">
        <div className="space-y-3">
          <p className="max-w-min rounded-e-full rounded-s-full bg-zinc-300 px-4 py-1 font-semibold">
            {tag}
          </p>
          <div>
            <h2 className="poppins-bold text-lg">{courseTitle}</h2>
            <p>By {tutor}</p>
            <p className="flex items-center text-zinc-400">
              <FaStar className="text-yellow-500" />({reviews} Review)
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-3 md:items-center">
          <Button
            variant="orangeAnimated"
            className="poppins-bold flex items-center gap-2 text-nowrap"
          >
            Enroll Now <FaArrowRightLong />
          </Button>
          <p className="poppins-bold text-lg">₹ {formatRupee(fees)}</p>
        </div>
      </div>
    </div>
  );
}

export function FilteredCardSkeleton() {
  return <div></div>;
}
