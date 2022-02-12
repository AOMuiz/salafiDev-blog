import { PostContent } from "../lib/posts";
import Date from "./Date";
import Link from "next/link";
import { parseISO } from "date-fns";

type Props = {
  post: PostContent;
};

export default function PostItem({ post }: Props) {
  // console.log(post.tags);
  // console.log(post);
  return (
    <Link href={"/posts/" + post.slug}>
      <article className="first-line:rounded-2xl bg-gradient-to-r from-red-400 to-red-600 p-1 shadow-xl cursor-pointer rounded-xl">
        <a className="flex h-full flex-col justify-end rounded-xl bg-gray-900 p-6 hover:bg-opacity-90 sm:p-8">
          <div className="mt-8">
            <div className="flex justify-between">
              <Date date={parseISO(post.date)} />
              <Link href={`/post/${post.slug}`}>
                <p className="text-gray-500 text-medium">
                  {post.category ? `In ${post.category}` : ""}
                </p>
              </Link>
            </div>
            <h5 className="mt-2 text-xl font-bold text-white">{post.title}</h5>
            <div className="mt-6 flex items-center justify-between">
              <p className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-lg font-medium text-transparent">
                By {post.author}
              </p>
              <ul className="flex space-x-1">
                {post.tags.map((it, i) => (
                  <li
                    key={i}
                    className="inline-block rounded-full bg-gray-800 px-3 py-1.5 text-xs font-medium text-white"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </a>
      </article>
    </Link>
  );
}
