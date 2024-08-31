"use client";
import React, { useCallback, useState } from "react";
import Image from "next/image";
import { LuDownload } from "react-icons/lu";
import { AiOutlineCloseCircle } from "react-icons/ai";

interface MediaModalProps {
  isOpen: boolean;
  mediaSrc: string;
  mediaType: "image" | "video" | "pdf";
  onClose: () => void;
}

const MediaModal: React.FC<MediaModalProps> = ({
  isOpen,
  mediaSrc,
  mediaType,
  onClose,
}) => {
  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = mediaSrc;
    link.download = mediaSrc.split("/").pop() || "document.pdf";
    link.click();
  };

  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 z-50 !m-0 flex items-center justify-center bg-black bg-opacity-70"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-max rounded-lg max-md:h-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-5 top-5 z-10 text-2xl text-orange-500 hover:text-orange-500 md:-right-7 md:-top-6 md:text-white"
          onClick={onClose}
        >
          <AiOutlineCloseCircle />
        </button>
        {mediaType === "image" && (
          <div className="flex h-full items-center">
            <Image
              src={mediaSrc}
              alt="media"
              width={800}
              height={800}
              className="h-auto max-h-[80vh] w-full rounded-lg object-contain"
            />
          </div>
        )}
        {mediaType === "video" && (
          <div className="flex h-full items-center">
            <video
              src={mediaSrc}
              controls
              autoPlay
              loop
              className="max-h-[80vh] w-full rounded-lg"
            />
          </div>
        )}
        {mediaType === "pdf" && (
          <div
            className="h-full w-full overflow-auto rounded-lg bg-white p-4 md:max-h-[80vh]"
            // ref={setContainerRef}
          >
            {/* <Document
              file={mediaSrc}
              onLoadSuccess={onDocumentLoadSuccess}
              options={options}
            >
              {Array.from(new Array(numPages), (_el, index) => (
                <Page key={`page_${index + 1}`} pageNumber={index + 1} />
              ))}
            </Document> */}

            <button
              onClick={downloadPDF}
              className="absolute right-5 top-14 text-2xl text-orange-500 hover:text-orange-500 md:-right-7 md:top-2 md:text-white"
            >
              <LuDownload />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MediaModal;
