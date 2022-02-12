import React from "react";
import { PostContent } from "../lib/posts";
import PostItem from "./PostItem";
import TagLink from "./TagLink";
import Pagination from "./Pagination";
import { TagContent } from "../lib/tags";
import PageTitle from "./PageTitle";

type Props = {
  posts: PostContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
  };
};
export default function PostList({ posts, tags, pagination }: Props) {
  // console.log("posts", posts);
  return (
    <div className="container mx-auto px-5 lg:px-10 divide-y">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <PageTitle>All Posts</PageTitle>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="col-span-1 lg:col-span-8">
          <ul className="col-span-1 lg:col-span-8">
            {posts.map((it, i) => (
              <li key={it.slug} className="mb-4 overflow-hidden">
                <PostItem post={it} />
              </li>
            ))}
          </ul>
          <Pagination
            current={pagination.current}
            pages={pagination.pages}
            link={{
              href: (page) => (page === 1 ? "/posts" : "/posts/page/[page]"),
              as: (page) => (page === 1 ? null : "/posts/page/" + page),
            }}
          />
        </div>
        <div className="col-span-1 lg:col-span-4 mb-8 rounded-lg bg-white p-8 pb-12 shadow-lg h-min">
          <h3 className="mb-8 border-b pb-4 text-xl font-semibold">Tags</h3>
          <ul>
            {tags.map((it, i) => (
              <li key={i} className="flex">
                <TagLink tag={it} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
