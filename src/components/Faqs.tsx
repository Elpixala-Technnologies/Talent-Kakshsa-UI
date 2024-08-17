"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import TextWithLineBreak from "@/utils/TextWithLineBreak";
import Wrapper from "./Wrappers";

export default function Faqs({ data, className = "" }: any) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (id: any) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {data?.map((faq: any, index: number) => (
        <div
          key={faq.id}
          className="mb-4 rounded-lg bg-white px-6 py-2 pt-4 shadow-lg"
        >
          {faq?.question && (
            <button
              onClick={() => toggleFaq(faq?.id)}
              className="flex w-full items-center justify-between text-left"
            >
              <span className="font-bold">{faq?.question}</span>
              <IoIosArrowDown
                className={`transform text-xl transition-transform ${
                  openFaq === faq?.id || (index === 0 && openFaq === null)
                    ? "rotate-180"
                    : ""
                }`}
              />
            </button>
          )}
          {faq?.answer && (
            <div
              className={`mt-2 transition-all duration-300 ease-in-out ${
                openFaq === faq?.id || (index === 0 && openFaq === null)
                  ? "max-h-96"
                  : "max-h-0 overflow-hidden"
              }`}
            >
              <hr className="my-2" />
              <p className="my-3 text-justify text-zinc-500">
                <TextWithLineBreak text={faq?.answer} />
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export function FaqsForDetailPage({ data, className = "" }: any) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (id: any) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {data?.map((faq: any, index: number) => (
        <div
          key={faq?.id}
          className="mb-4 rounded-2xl bg-white px-6 py-2 pt-4 shadow-lg"
        >
          {faq?.question && (
            <button
              onClick={() => toggleFaq(faq?.id)}
              className="flex w-full items-center justify-between text-left"
            >
              <span className="text-lg font-medium">{faq?.question}</span>
              <IoIosArrowDown
                className={`transform text-xl transition-transform ${
                  openFaq === faq?.id || (index === 0 && openFaq === null)
                    ? "rotate-180"
                    : ""
                }`}
              />
            </button>
          )}
          {faq?.answer && (
            <div
              className={`mt-2 transition-all duration-300 ease-in-out ${
                openFaq === faq?.id || (index === 0 && openFaq === null)
                  ? "max-h-96"
                  : "max-h-0 overflow-hidden"
              }`}
            >
              <hr className="my-2" />
              <p className="my-3 text-justify text-zinc-500">
                <TextWithLineBreak text={faq?.answer} />
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}