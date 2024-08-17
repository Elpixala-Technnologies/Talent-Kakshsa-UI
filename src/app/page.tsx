"use client";
import React from "react";
import { useQuery } from "@apollo/client";
import { getAllNews } from "@/graphql/newsQuery/news";
export default function HomePage() {
  const { loading, error, data: newsData } = useQuery(getAllNews);

  console.log("newsData", newsData);
  return <div>HomePage</div>;
}
