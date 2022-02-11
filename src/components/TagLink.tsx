import Link from "next/link";
import { TagContent } from "../lib/tags";

type Props = {
  tag: TagContent;
};
export default function Tag({ tag }: Props) {
  return (
    <Link href={"/posts/tags/[[...slug]]"} as={`/posts/tags/${tag.slug}`}>
      <span className={`block cursor-pointer mb-3 pb-3`}>
        <a>{tag.name}</a>
      </span>
    </Link>
  );
}
