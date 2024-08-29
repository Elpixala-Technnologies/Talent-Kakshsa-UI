import React from "react";
import { Button } from "../Button";
import Image from "next/image";
import Link from "next/link";
import { RiBookletLine, RiTodoLine } from "react-icons/ri";
import formatFees, { formatDate } from "@/utils/customText";
import { FaArrowRightLong, FaBuildingColumns } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

export default function CourseFilteredCard({
  slug,
  bgImage,
  courseTitle,
  tutor,
  fees,
  tag,
  reviews,
}: any) {
  return (
    <div className="relative w-full rounded-md bg-white duration-300 hover:shadow-[0px_0px_20px_2px_#ed8936]">
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
        <Button
          variant="orangeAnimated"
          className="flex items-center gap-2 text-nowrap"
        >
          Enroll Now <FaArrowRightLong />
        </Button>
        <button className="button-56">Enroll Now</button>
      </div>
    </div>
  );
}

export function FilteredCardSkeleton() {
  return <div></div>;
}
