import { generatePagination } from "../lib/pagination";
import Link from "next/link";

type Props = {
  current: number;
  pages: number;
  link: {
    href: (page: number) => string;
    as: (page: number) => string;
  };
};
export default function Pagination({ current, pages, link }: Props) {
  const pagination = generatePagination(current, pages);
  return (
    <ul className="flex items-center space-x-1 cursor-pointer">
      {pagination.map((it, i) => (
        <Link href={link.href(it.page)} as={link.as(it.page)}>
          <li
            key={i}
            className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white"
          >
            {it.excerpt ? (
              "..."
            ) : (
              <a className={it.page === current ? "active" : null}>{it.page}</a>
            )}
          </li>
        </Link>
      ))}
      <style jsx>{`
        ul {
          list-style: none;
          margin: 3rem 0 0 0;
          padding: 0;
        }
        li {
          display: inline-block;
          margin-right: 1em;
          color: #9b9b9b;
          font-size: 1.25rem;
        }
        a.active {
          color: #222;
          font-weight: bold;
        }
      `}</style>
    </ul>
  );
}
