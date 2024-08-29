"use client";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { banner1, vector1, vector2, vector3 } from "@/assets";
import { sliderText } from "@/utils/motion";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { SiTicktick } from "react-icons/si";
import MediaModal from "../MediaModal";
import { discountedAmount, formatRupee } from "@/utils/customText";

export function CourseDetailBanner({
  tag,
  title,
  desc,
  isBestSeller,
  reviews,
  rating,
  authorName,
  lastUpdated,
  fees,
  discountFeesBy,
  demoVideo,
  videoThumbnail,
}: any) {
  // Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMediaSrc, setSelectedMediaSrc] = useState("");
  const [selectedMediaType, setSelectedMediaType] = useState<"image" | "video">(
    "image",
  );
  const openModal = (src: string, type: "image" | "video") => {
    setSelectedMediaSrc(src);
    setSelectedMediaType(type);
    setIsModalOpen(true);
  };
  return (
    <>
      <div className="relative overflow-hidden rounded-xl bg-orange-500">
        <Image
          src={vector3}
          width={2500}
          height={2500}
          alt="banner"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="grid grid-cols-2 gap-5">
          {/* Left  */}
          <div className="z-10 col-span-1 flex flex-col justify-center space-y-5 p-5 text-white max-md:flex-row-reverse max-md:flex-col md:p-10">
            {/* Breadcrumb  */}
            <div className="flex gap-2 font-semibold">
              <Link href={"/"}>Home</Link>
              <IoIosArrowForward />
              <Link href={"/courses"}>Courses</Link>
              <IoIosArrowForward />
              <p className="text-blue-900">{tag}</p>
            </div>
            <h1 className="text-3xl font-bold md:text-4xl">{title}</h1>
            <p className="text-lg">{desc}</p>
            <div className="flex flex-wrap gap-5 text-sm">
              <div className="flex items-center gap-2">
                <FaStar className="text-lg text-yellow-500" />
                <p>{rating}</p>
                <p>({reviews} Reviews)</p>
              </div>
              <div className="flex items-center gap-2">
                <GoDotFill />
                <p className="flex gap-3">
                  Publish By{" "}
                  <span className="text-bold flex items-center gap-2 underline">
                    {authorName}
                    <SiTicktick className="text-lg text-green-500" />
                  </span>
                </p>
              </div>
              <p>Last Updated: {lastUpdated}</p>
            </div>
            <p className="flex items-center gap-2 font-semibold">
              <span className="text-3xl font-extrabold text-blue-900">
                ₹ {formatRupee(discountedAmount(fees))}
              </span>
              <span className="line-through">/ ₹ {formatRupee(fees)}</span>
              <span className="text-blue-900">-{discountFeesBy}% Off</span>
            </p>
          </div>
          {/* Right  */}
          <div className="flex-center relative col-span-1">
            <div className="h-min w-min">
              <Image
                src={vector1}
                alt="vector"
                className="absolute left-5 top-5"
              />
              <Image
                src={vector2}
                alt="vector"
                className="absolute bottom-5 right-5"
              />
              <Image
                src={videoThumbnail}
                alt="Video Thumbnail"
                className="h-52 w-min object-contain"
                width={500}
                height={500}
                onClick={() => openModal(demoVideo, "video")}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Media Modal */}
      <MediaModal
        isOpen={isModalOpen}
        mediaSrc={selectedMediaSrc}
        mediaType={selectedMediaType}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
