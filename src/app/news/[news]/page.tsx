"use client";
import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { getNewsDetails } from "@/graphql/newsQuery/newsDetails";
import Image from "next/image";
import { formatDate } from "@/utils/customText";
import Wrapper from "@/components/Wrappers";
import NewsDetailPageBanner, {
  NewsDetailPageBannerSkeleton,
} from "@/components/banners/NewsDetailPageBanner";
import { news1 } from "@/assets";
import NewsAside from "@/components/newsPageSections/NewsAside";

type Props = {
  params: {
    news: String;
  };
};
export default function NewsPage({ params }: Props) {
  const newsId = params?.news;
  // Query
  const {
    loading,
    error,
    data: newsDetailData,
    refetch,
  } = useQuery(getNewsDetails, {
    variables: { ID: newsId },
  });
  useEffect(() => {
    console.log(newsDetailData, "first");
    console.log(newsId, "newsId");
  }, [newsDetailData]);
  // ==================================================== //
  useEffect(() => {
    if (!loading && !newsDetailData) {
      refetch();
    }
  }, [newsDetailData, refetch, loading]);
  // ==================================================== //
  return (
    <>
      {!loading ? (
        <NewsDetailPageBanner
          title={newsDetailData?.new?.data?.attributes?.title}
          tags={
            newsDetailData?.new?.data?.attributes?.tag?.data?.map(
              (item: any) => item?.attributes?.tag,
            ) || []
          }
          description={newsDetailData?.new?.data?.attributes?.description}
          lastUpdated={formatDate(
            newsDetailData?.new?.data?.attributes?.updatedAt,
          )}
          bgImage={
            newsDetailData?.new?.data?.attributes?.bgImage?.data?.attributes
              ?.url
          }
        />
      ) : (
        <NewsDetailPageBannerSkeleton />
      )}
      <Wrapper bgColor="bg-blue-50 py-10">
        <main className="grid grid-cols-12 gap-5">
          <div className="col-span-12 space-y-5 lg:col-span-9">
            {!loading ? (
              <Content
                avatar={
                  newsDetailData?.new?.data?.attributes?.author?.data
                    ?.attributes?.avatar?.data?.attributes?.url
                }
                writerName={
                  newsDetailData?.new?.data?.attributes?.author?.data
                    ?.attributes?.name
                }
                designation={
                  newsDetailData?.new?.data?.attributes?.author?.data
                    ?.attributes?.designation
                }
                content={newsDetailData?.new?.data?.attributes?.content}
                title={newsDetailData?.new?.data?.attributes?.title}
                date={newsDetailData?.new?.data?.attributes?.updatedAt}
              />
            ) : (
              <ContentSkeleton />
            )}
          </div>
          <NewsAside />
        </main>
      </Wrapper>
    </>
  );
}

function Content({
  avatar,
  writerName,
  designation,
  content,
  title,
  date,
}: any) {
  // console.log(avatar, "avatar");
  return (
    <div className="w-full">
      {/* Author */}
      <div className="mb-8 flex items-center gap-x-2">
        <Image
          src={avatar}
          alt="avatar"
          className="h-16 w-16 rounded-full"
          width={48}
          height={48}
        />
        <div className="flex flex-col gap-2">
          <p className="text-3xl font-bold text-orange-500">
            {writerName || "Admin"}
          </p>
          <div className="flex flex-wrap items-center gap-2 text-zinc-500">
            <p className="font-bold">{designation} |</p>
            <p className="font-medium">Last Updated: {formatDate(date)}</p>
          </div>
        </div>
      </div>
      {/* Title  */}
      <h2 className="my-5 text-2xl font-bold capitalize">{title}</h2>
      {/* EditorText */}
      {content && (
        <div
          className={`dangerouslySetInnerHTMLStyle transparent-bg mb-5 text-justify`}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
    </div>
  );
}
function ContentSkeleton() {
  return (
    <Wrapper>
      <div className="mt-5 w-full p-5 md:min-w-[550px]">
        {/* Author */}
        <div className="mb-8 flex animate-pulse items-center gap-x-2">
          <div className="h-16 w-16 rounded-full bg-orange-300"></div>
          <div className="flex flex-col gap-2">
            <div className="h-6 w-36 rounded-md bg-orange-300"></div>
            <div className="flex items-center gap-2 text-zinc-500">
              <div className="h-4 w-24 rounded-md bg-orange-300"></div>
              <div className="h-4 w-24 rounded-md bg-orange-300"></div>
            </div>
          </div>
        </div>
        {/* Title */}
        <div className="mb-5 h-8 w-3/4 animate-pulse rounded-md bg-orange-300"></div>
        {/* Content */}
        <div className="mb-5 h-4 animate-pulse rounded-md bg-orange-300"></div>
        <div className="mb-5 h-4 animate-pulse rounded-md bg-orange-300"></div>
        <div className="mb-5 h-4 animate-pulse rounded-md bg-orange-300"></div>
        <div className="mb-5 h-4 w-1/2 animate-pulse rounded-md bg-orange-300"></div>
        <div className="mb-5 h-4 animate-pulse rounded-md bg-orange-300"></div>
        <div className="mb-5 h-4 animate-pulse rounded-md bg-orange-300"></div>
        <div className="mb-5 h-4 w-1/2 animate-pulse rounded-md bg-orange-300"></div>
      </div>
    </Wrapper>
  );
}
