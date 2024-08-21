import { news1 } from "@/assets";
import { getAllNews } from "@/graphql/newsQuery/news";
import { formatDate } from "@/utils/customText";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NewsAside() {
  const {
    data: recommendedSequenceNews,
    loading: recommendedSequenceLoading,
    error: recommendedSequenceError,
    refetch: recommendedSequenceRefetch,
  } = useQuery(getAllNews, {
    variables: {
      newsSortingParameter: "recommendedSequence",
      page: 1,
      pageSize: 5,
    },
  });
  // ==================================== //
  return (
    <aside className="col-span-3 space-y-5 max-lg:hidden">
      {/* Recommended Posts */}
      <div className="rounded-xl bg-white p-3 font-semibold shadow-lg">
        <h4 className="border-b border-zinc-400 pb-2 text-lg">
          Recommended Posts
        </h4>
        {!recommendedSequenceLoading
          ? recommendedSequenceNews?.news?.data?.map(
              (item: any, index: number) => (
                <NewsAsideCard
                  key={index}
                  bgImage={item?.attributes?.bgImage?.data?.attributes?.url}
                  title={item?.attributes?.title}
                  lastUpdated={formatDate(
                    item?.attributes?.author?.data?.attributes?.updatedAt,
                  )}
                  slug={item?.id}
                />
              ),
            )
          : [0, 1, 2, 3, 4].map((item: any, index: number) => (
              <NewsAsideCardSkeleton key={index} />
            ))}
      </div>
      {/* Discover communities */}
      <div className="rounded-xl bg-white p-3 font-semibold shadow-lg">
        <h4 className="border-b border-zinc-400 pb-2 text-lg">
          Discover communities
        </h4>
        {[1, 2, 3, 4]?.map((item: any, index: number) => (
          <NewsAsideCard
            key={index}
            bgImage={news1}
            title={"15+ Scholarships for Indian Students to Study in the UK"}
            lastUpdated={"Nov 12, 2022"}
            slug
          />
        ))}
      </div>
    </aside>
  );
}

function NewsAsideCard({ bgImage, title, lastUpdated, slug }: any) {
  return (
    <div className="my-3 flex cursor-pointer items-center gap-x-2 rounded-lg p-2 hover:bg-gray-100">
      <Image
        src={bgImage}
        alt="logo"
        width={100}
        height={100}
        className="h-16 w-16 rounded-lg object-cover"
      />
      <div>
        <Link href={slug ? `/news/${slug}` : `#`}>
          <h3 className="line-clamp-2 cursor-pointer font-semibold text-zinc-700 hover:text-blue-900">
            {title}
          </h3>
        </Link>
        <p className="text-xs text-zinc-400">{lastUpdated}</p>
      </div>
    </div>
  );
}

function NewsAsideCardSkeleton() {
  return (
    <div className="my-3 flex animate-pulse items-center gap-x-2 rounded-lg bg-gray-100 p-2">
      <div className="h-16 w-16 rounded-lg bg-gray-200"></div>
      <div className="flex-1 space-y-2">
        <div className="h-4 w-3/4 rounded-md bg-gray-200"></div>
        <div className="h-3 w-1/2 rounded-md bg-gray-200"></div>
      </div>
    </div>
  );
}
