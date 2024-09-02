import React from "react";
import { DiscussionForumPostInput } from "../Page-discussionForumPage/DiscussionForumPostInput";
import { UserComments } from "../Page-discussionForumPage/UserComments";
import { news1, video } from "@/assets";
import { codeSnippetDemo } from "@/data/shiki";

export default function NewsFeed({ tab }: any) {
  return (
    <>
      <DiscussionForumPostInput avatar={false} />
      {/* Other User Comments  */}
      {[1, 2].map((item) => (
        <UserComments
          key={item}
          description="This is a description"
          images={[news1]}
          cameraImages={[news1]}
          videos={[video]}
          lastUpdated="lastUpdated"
          userAvatar={news1}
          userName="User Name"
          userDesignation="User Designation"
          codeSnippet={codeSnippetDemo}
          codeSnippetFileName={"pankaj"}
        />
      ))}
    </>
  );
}
