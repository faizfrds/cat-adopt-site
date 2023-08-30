"use client";

import { HiSearch } from "react-icons/hi";
import { twMerge } from "tailwind-merge";
import SearchBar from "./SearchBar";

interface HeaderProps {
  className?: string;
  isOpen?: boolean;
}

const Header: React.FC<HeaderProps> = ({ className, isOpen }) => {

  return (
    <div className="flex justify-center w-screen md:h-[50vh] h-fit bg-auto bg-[url('/images/marquee-pic.png')] items-center md:p-2 py-24">
      <div className="w-8/12">
        <div className="flex text-white justify-center lg:text-6xl text-4xl font-bold text-center">
          Find your next fur friend
        </div>

        {/* <div className="lg:flex hidden justify-center">
            <SearchBar />
        </div> */} {/* SEARCH FUNCTIONALITY NOT FUNCTIONAL YET*/}

        {/* <div className="flex lg:hidden">
            
          {!isOpen ? (
            <SearchBar />
          ) : (
            <></>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default Header;
