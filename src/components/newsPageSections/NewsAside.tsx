import { news1 } from '@/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function NewsAside() {
  return (
    <aside className="col-span-3 space-y-5 max-lg:hidden">
    {/* Recommended Posts */}
    <div className="rounded-xl bg-white p-3 font-semibold shadow-lg">
      <h4 className="border-b border-zinc-400 pb-2 text-lg">
        Recommended Posts
      </h4>
      {[1, 2, 3, 4]?.map((item: any, index: number) => (
        <NewsAsideCard
          key={index}
          bgImage={news1}
          title={
            "15+ Scholarships for Indian Students to Study in the UK"
          }
          lastUpdated={"Nov 12, 2022"}
          slug
        />
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
          title={
            "15+ Scholarships for Indian Students to Study in the UK"
          }
          lastUpdated={"Nov 12, 2022"}
          slug
        />
      ))}
    </div>
  </aside>
  )
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
          <Link href={`/news/${slug} || #`} />
          <h3 className="line-clamp-2 cursor-pointer font-semibold text-zinc-700 hover:text-blue-900">
            {title}
          </h3>
          <p className="text-xs text-zinc-400">{lastUpdated}</p>
        </div>
      </div>
    );
  }