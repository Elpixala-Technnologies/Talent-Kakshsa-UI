import DiscussionAside from "@/components/AsideSections/DiscussionAside";
import { Button } from "@/components/Button";
import Wrapper from "@/components/Wrappers";
import React from "react";

export default function DiscussionForumPage() {
  return (
    <Wrapper bgColor="bg-blue-50 py-10">
      <main className="grid grid-cols-12 gap-5">
        <div className="col-span-12 space-y-5 lg:col-span-9">
          <DiscussionForumPostInput />
        </div>
        <DiscussionAside />
      </main>
    </Wrapper>
  );
}
function DiscussionForumPostInput() {
  return (
    <div className="space-y-3 rounded-lg p-3">
      <h2 className="text-2xl font-bold text-blue-900">Discussion Forum</h2>
      <div className="flex gap-3">
        <div className="flex gap-3">
          <div className="bg- rounded-full"></div>
        </div>
        <Button variant="orange">Post</Button>
      </div>
    </div>
  );
}
