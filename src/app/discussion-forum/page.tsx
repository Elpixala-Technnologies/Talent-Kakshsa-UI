"use client";
import DiscussionAside from "@/components/AsideSections/DiscussionAside";
import { Button } from "@/components/Button";
import Wrapper from "@/components/Wrappers";
import Image from "next/image";
import React, { useCallback, useRef, useState } from "react";
// import { codeToHtml } from "shiki";
// import type { BundledLanguage, BundledTheme } from "shiki";
import { transformerNotationHighlight } from "@shikijs/transformers";
import {
  IoCameraOutline,
  IoCodeSlash,
  IoImagesOutline,
  IoVideocamOutline,
} from "react-icons/io5";
import { LuCopy } from "react-icons/lu";
import { TbCopyCheckFilled } from "react-icons/tb";
import dynamic from "next/dynamic";
import Webcam from "react-webcam";

export default function DiscussionForumPage() {
  return (
    <Wrapper bgColor="bg-blue-50 py-10 mt-14">
      <main className="grid grid-cols-12 gap-5">
        <div className="col-span-12 space-y-5 lg:col-span-9">
          <DiscussionForumPostInput avatar={false} />
        </div>
        <DiscussionAside />
      </main>
    </Wrapper>
  );
}

function DiscussionForumPostInput({ avatar }: any) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedCamera, setSelectedCamera] = useState<string | null>(null);
  const [codeSnippet, setCodeSnippet] = useState<string>("");
  const [highlightedCode, setHighlightedCode] = useState<string>("");
  const [isCodeTextAreaDisplay, setIsCodeTextAreaDisplay] =
    useState<boolean>(false);
  const [isCodeCopied, setIsCodeCopied] = useState<boolean>(false);
  // For Camera
  const [imgSrc, setImgSrc] = useState(null);
  const [isCamera, setIsCamera] = useState<boolean>(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setSelectedVideo(URL.createObjectURL(file));
    }
  };

  const handleCodeInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCodeSnippet(e.target.value);
  };

  const handleCodeHighlight = async () => {
    const { codeToHtml } = await import("shiki");
    const html = await codeToHtml(codeSnippet, {
      lang: "javascript", // You can change the default language
      theme: "nord", // You can change the theme
      transformers: [transformerNotationHighlight()],
    });
    setHighlightedCode(html);
  };

  const handleCopyCode = () => {
    if (highlightedCode) {
      // Extract plain text from the highlighted code HTML
      const div = document.createElement("div");
      div.innerHTML = highlightedCode;
      const plainText = div.textContent || div.innerText || "";
      navigator.clipboard.writeText(plainText);
      setIsCodeCopied(true);

      // Reset the copied state after a short delay
      setTimeout(() => setIsCodeCopied(false), 10000);
    }
  };

  return (
    <div className="space-y-3 rounded-lg bg-white p-3">
      <h2 className="text-2xl font-bold text-blue-900">Discussion Forum</h2>
      {/* Post Input */}
      <div className="flex w-full items-center gap-3 max-sm:flex-wrap max-sm:justify-end">
        <div className="flex w-full items-center gap-3">
          {!avatar ? (
            <div className="flex-center min-h-10 min-w-10 rounded-full bg-blue-900 capitalize text-white">
              P
            </div>
          ) : (
            <Image
              src={avatar}
              alt="avatar"
              className="min-10 h-10 min-h-10 w-10 rounded-full object-cover"
            />
          )}
          <textarea
            rows={1}
            cols={1}
            className="ease h-10 w-full rounded bg-blue-50 px-3 py-2 text-sm text-slate-700 shadow-sm transition duration-300 placeholder:text-slate-400 hover:border-blue-400 focus:border-blue-400 focus:shadow-md focus:outline-none"
            placeholder="Start a Discussion"
          />
        </div>
        <Button variant="orange" className="max-h-10">
          Post
        </Button>
      </div>
      {/* Post Input - 2 */}
      <div className="flex w-full flex-wrap items-center gap-x-8 gap-y-3 sm:ml-14">
        <button
          onClick={() => setIsCamera(!isCamera)}
          className="flex cursor-pointer items-center gap-2 hover:text-blue-900 active:scale-95"
        >
          <IoCameraOutline />
          <p className="cursor-pointer">Camera</p>
          {/* <input
            type="file"
            accept="image/*"
            capture="environment"
            className="hidden"
            onChange={handleCameraCapture}
          /> */}
        </button>
        <label className="flex cursor-pointer items-center gap-2 hover:text-blue-900 active:scale-95">
          <IoImagesOutline />
          <p className="cursor-pointer">Images</p>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </label>
        <label className="flex cursor-pointer items-center gap-2 hover:text-blue-900 active:scale-95">
          <IoVideocamOutline />
          <p className="cursor-pointer">Video</p>
          <input
            type="file"
            accept="video/*"
            className="hidden"
            onChange={handleVideoChange}
          />
        </label>
        <button
          className="flex cursor-pointer items-center gap-2 hover:text-blue-900 active:scale-95"
          onClick={() => setIsCodeTextAreaDisplay(!isCodeTextAreaDisplay)}
        >
          <IoCodeSlash />
          <p className="cursor-pointer">Code Snippets</p>
        </button>
      </div>
      {/* Code Snippet Input */}
      {isCodeTextAreaDisplay && (
        <div className="mt-4 sm:ml-14">
          <textarea
            rows={4}
            cols={50}
            className="ease w-full rounded bg-blue-50 px-3 py-2 text-sm text-slate-700 shadow-sm transition duration-300 placeholder:text-slate-400 hover:border-blue-400 focus:border-blue-400 focus:shadow-md focus:outline-none"
            placeholder="Paste your code here..."
            value={codeSnippet}
            onChange={handleCodeInput}
          />
          <Button
            onClick={handleCodeHighlight}
            variant="blue"
            className="mt-2 text-nowrap"
          >
            Highlight Code
          </Button>
        </div>
      )}
      {/* Previews */}
      <div className="mt-4 space-y-4">
        {isCamera && <CustomWebcam imgSrc={imgSrc} setImgSrc={setImgSrc} />}
        {selectedImage && (
          <div>
            <Image
              src={selectedImage}
              alt="Selected"
              width={500}
              height={500}
              className="max-h-60 rounded-lg object-contain"
            />
          </div>
        )}
        {selectedVideo && (
          <div>
            <video controls width="100">
              <source src={selectedVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
        {highlightedCode && (
          <div className="relative mt-5 w-full rounded-lg bg-orange-500 p-2 [&>pre]:rounded-none">
            {/* Button to copy code */}
            <button
              className="absolute right-5 top-5 cursor-pointer text-xl text-zinc-500"
              onClick={handleCopyCode}
            >
              {isCodeCopied ? <TbCopyCheckFilled /> : <LuCopy />}
            </button>
            <div className="overflow-hidden rounded-lg">
              <div className="flex items-center justify-between bg-gradient-to-r from-neutral-900 to-neutral-800 py-2 pl-2 pr-4 text-sm">
                <span className="-mb-[calc(0.5rem+2px)] rounded-t-lg border-2 border-white/5 border-b-neutral-700 bg-neutral-800 px-4 py-2 text-zinc-400">
                  Code
                </span>
              </div>
              <div
                className="max-h-96 overflow-y-auto border-t-2 border-neutral-700 text-sm [&>pre]:overflow-x-auto [&>pre]:!bg-neutral-900 [&>pre]:py-3 [&>pre]:pl-4 [&>pre]:pr-5 [&>pre]:leading-snug [&_code]:block [&_code]:w-fit [&_code]:min-w-full"
                dangerouslySetInnerHTML={{ __html: highlightedCode }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const CustomWebcam = ({ imgSrc, setImgSrc }: any) => {
  const webcamRef = useRef<Webcam | null>(null);

  // create a capture function
  const capture = useCallback(() => {
    if (webcamRef.current) {
      // Add a null check here
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);
    }
  }, [webcamRef, setImgSrc]);

  const retake = () => {
    setImgSrc(null);
  };

  return (
    <div className="space-y-4">
      {imgSrc ? (
        <Image
          width={500}
          height={500}
          src={imgSrc}
          alt="webcam"
          className="max-h-60 rounded-lg object-contain"
        />
      ) : (
        <Webcam height={500} width={500} ref={webcamRef} />
      )}
      {imgSrc ? (
        <Button variant="orange" className="text-nowrap" onClick={retake}>
          Retake photo
        </Button>
      ) : (
        <Button variant="orange" className="text-nowrap" onClick={capture}>
          Capture photo
        </Button>
      )}
    </div>
  );
};
