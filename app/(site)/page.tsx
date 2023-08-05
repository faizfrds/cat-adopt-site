import Header from "@/components/Header";
import Showcase from "@/app/(site)/components/Showcase";
import { HiArrowRight } from "react-icons/hi";

import getCatHome from "@/actions/getCatHome";
import Button from "@/components/Button";
import Link from "next/link";

export const revalidate = 0;

const Home = async () => {
  const cats = await getCatHome();

  return (
    <div className="flex-col justify-center text-center pb-2">
      <div className="bg-cyan-600 w-screen h-3" />
      <div className="text-4xl text-cyan-600 pt-8 flex-col flex">
        Cats Available For Adoption
      </div>

      <div className="flex justify-center">
        <Showcase cats={cats} />
      </div>

      <Link
        className="inline-flex items-center font-bold text-cyan-600 group pb-3"
        href="/cats"
      >
        <span>
          <span className="border-b border-transparent pb-px transition group-hover:border-blue-200 motion-reduce:transition-none">
            {" "}
          </span>
          <span className="whitespace-nowrap">
            <span className="border-b border-transparent pb-px transition group-hover:border-blue-200 motion-reduce:transition-none">
              See All Cats
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
        </span>
      </Link>
    </div>
  );
};

export default Home;
