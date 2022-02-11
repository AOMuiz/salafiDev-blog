import Link from "next/link";
import { useRouter } from "next/router";
import Burger from "./Burger";
import { useState } from "react";

export default function Navigation() {
  const router = useRouter();
  const [active, setActive] = useState(false);
  return (
    <>
      <div className="container mx-auto mb-8 px-5 lg:px-10">
        <div className="inline-block w-full border-b border-blue-400 py-8">
          <div className="block bg-gradient-to-r from-red-400 via-blue-500 to-red-600 bg-clip-text md:float-left">
            <Link href="/">
              <span className="cursor-pointer text-3xl font-bold text-transparent lg:text-4xl">
                SalafiBlog
              </span>
            </Link>
          </div>
          <div className="hidden md:float-left md:contents">
            <Link href="/posts">
              <span className="mt-2 ml-4 cursor-pointer align-middle font-semibold md:float-right">
                Blog
              </span>
            </Link>
            <Link href="/">
              <a>
                <span className="mt-2 ml-4 cursor-pointer align-middle font-semibold md:float-right">
                  About
                </span>
              </a>
            </Link>
            <a>
              <span className="mt-2 ml-4 cursor-pointer align-middle font-semibold md:float-right">
                Contact
              </span>
            </a>
            <a>
              <span className="mt-2 ml-4 cursor-pointer align-middle font-semibold md:float-right">
                React
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
