"use client";
import { Button } from "@/components/Button";
import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";
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
import Webcam from "react-webcam";
import { supportedLanguages } from "@/data/shiki";

export function DiscussionForumPostInput({ avatar }: any) {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [tags, setTags] = useState<string[]>([]);
  // code snippet
  const [codeSnippet, setCodeSnippet] = useState<string>("");
  const [highlightedCode, setHighlightedCode] = useState<string>("");
  const [isCodeTextAreaDisplay, setIsCodeTextAreaDisplay] =
    useState<boolean>(false);
  const [isCodeCopied, setIsCodeCopied] = useState<boolean>(false);
  const [codeLang, setCodeLang] = useState<string>("");
  const [codeFileName, setCodeFileName] = useState<string>("");
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

  const handleCodeHighlight = async (codeLang: string) => {
    const { codeToHtml } = await import("shiki");
    const html = await codeToHtml(codeSnippet, {
      lang: codeLang,
      theme: "nord", // You can change the theme
      transformers: [transformerNotationHighlight()],
    });
    setHighlightedCode(html);
    console.log(html);
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
      <div className="flex w-full gap-3 max-sm:flex-wrap max-sm:justify-end">
        <div className="flex w-full items-start gap-3">
          {!avatar ? (
            <div className="flex-center min-h-10 min-w-10 rounded-full bg-blue-900 capitalize text-white">
              P
            </div>
          ) : (
            <Image
              src={avatar}
              alt="avatar"
              width={50}
              height={50}
              className="min-10 h-10 min-h-10 w-10 rounded-full object-cover"
            />
          )}
          <div className="w-full space-y-3">
            <input
              className="w-full rounded bg-blue-50 px-3 py-2 text-sm text-slate-700 shadow-sm transition duration-300 placeholder:text-slate-400 hover:border-blue-400 focus:border-blue-400 focus:shadow-md focus:outline-none"
              placeholder="Title"
              value={codeFileName}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              rows={4}
              cols={50}
              className="w-full rounded bg-blue-50 px-3 py-2 text-sm text-slate-700 shadow-sm transition duration-300 placeholder:text-slate-400 hover:border-blue-400 focus:border-blue-400 focus:shadow-md focus:outline-none"
              placeholder="Start a Discussion"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <TagsInput tags={tags} setTags={setTags} />
          </div>
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
          <div className="mt-2 flex flex-wrap gap-3">
            <input
              className="ease w-36 rounded bg-blue-50 px-3 py-2 text-sm text-slate-700 shadow-sm transition duration-300 placeholder:text-slate-400 hover:border-blue-400 focus:border-blue-400 focus:shadow-md focus:outline-none"
              placeholder="File Name"
              value={codeFileName}
              onChange={(e) => setCodeFileName(e.target.value)}
            />
            <select
              className="block h-12 w-36 rounded-lg border border-gray-300 bg-gray-50 px-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              onChange={(e) => setCodeLang(e.target.value)}
            >
              <option>Select Language</option>
              {supportedLanguages?.map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
            <Button
              onClick={() => codeLang !== "" && handleCodeHighlight(codeLang)}
              variant="blue"
              className="text-nowrap"
              disabled={codeLang === "" && true}
            >
              Highlight Code
            </Button>
          </div>
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
                  {codeFileName || "Code"}
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

function TagsInput({
  tags,
  setTags,
}: {
  tags: string[];
  setTags: (tags: string[]) => void;
}) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault();
      if (!tags.includes(inputValue.trim())) {
        setTags([...tags, inputValue.trim()]);
        setInputValue("");
      }
    }
  };

  const handleRemoveTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  return (
    <div className="!mt-2 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <div
          key={tag}
          className="flex flex-wrap items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700"
        >
          <span>{tag}</span>
          <button
            type="button"
            onClick={() => handleRemoveTag(tag)}
            className="text-lg text-red-500"
          >
            &times;
          </button>
        </div>
      ))}
      <input
        type="text"
        className="rounded bg-blue-50 px-3 py-2 text-sm text-slate-700 shadow-sm transition duration-300 placeholder:text-slate-400 hover:border-blue-400 focus:border-blue-400 focus:shadow-md focus:outline-none"
        placeholder="Add a tag and press Enter"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
      />
    </div>
  );
}
