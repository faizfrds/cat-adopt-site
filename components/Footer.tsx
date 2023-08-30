import React from "react";
import { AiFillGithub, AiOutlineGlobal } from "react-icons/ai";

export default function Footer() {
  return (
    <div>
      <div className="bg-cyan-950 py-10 w-screen">
        <div className="mx-auto md:w-8/12 w-10/12 p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="https://github.com/faizfrds/cat-adopt-site" className="flex items-center">
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Cats4You
                </span>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 ">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Resources
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="/" className="hover:underline">
                      Adopting Guide
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow us
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="/" className="hover:underline ">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover:underline">
                      YouTube
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="text-neutral-400 text-sm">
            <div className="flex justify-center gap-x-2">
              <p className="mr-3">Inspired by the cats without a home. Created by Faiz Firdaus - 2023</p>
              <a href="https://github.com/faizfrds" target="#">
                <AiFillGithub
                  size={18}
                  className="hover:text-neutral-300 transition"
                />
              </a>
              <a href="https://www.faizfirdaus.cloud/" target="#">
                <AiOutlineGlobal
                  size={18}
                  className="hover:text-neutral-300 transition"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
